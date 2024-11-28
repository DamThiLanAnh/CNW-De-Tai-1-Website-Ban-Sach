server:
	go run ./cmd/main.go
docker:
	docker run --name book-store -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=123 -d postgres:12-alpine
.PHONY:server
