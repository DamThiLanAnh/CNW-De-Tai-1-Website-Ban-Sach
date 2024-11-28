package main

import (
	"context"
	"fmt"
	"github.com/jackc/pgx/v5"
	"os"
)

func main() {
	path := "postgres://root:123@localhost:5432/bookstore"
	conn, err := pgx.Connect(context.Background(), path)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
	} else {
		fmt.Println("connected to database")
	}
	defer conn.Close(context.Background())

	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to get author: %v\n", err)
		os.Exit(1)
	}

	// Todo: Insert a table in database using pgx

}
