package main

import (
    "database/sql"
    "encoding/json"
    "fmt"
    "net/http"
    "os"

    _ "github.com/go-sql-driver/mysql"
)

type BlogPost struct {
    ID    int    `json:"id"`
    Title string `json:"title"`
    Body  string `json:"body"`
}

var db *sql.DB

func blogHandler(w http.ResponseWriter, r *http.Request) {
    rows, err := db.Query("SELECT id, title, body FROM posts")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    var posts []BlogPost
    for rows.Next() {
        var post BlogPost
        if err := rows.Scan(&post.ID, &post.Title, &post.Body); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        posts = append(posts, post)
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(posts)
}

func main() {
    dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s",
        os.Getenv("DB_USER"),
        os.Getenv("DB_PASSWORD"),
        os.Getenv("DB_HOST"),
        os.Getenv("DB_PORT"),
        os.Getenv("DB_NAME"),
    )

    var err error
    db, err = sql.Open("mysql", dsn)
    if err != nil {
        panic(err)
    }

    if err := db.Ping(); err != nil {
        panic(err)
    }

    http.HandleFunc("/api/blog", blogHandler)
    fmt.Println("Backend running on :8080")
    http.ListenAndServe(":8080", nil)
}
