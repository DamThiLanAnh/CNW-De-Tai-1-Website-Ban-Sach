FROM golang:alpine AS builder

# Cai dat cac cong cu can thiet
RUN apl add --no-cache git

# Thiet lao thu muc lam viec
WORKDIR /app

# Copy toàn bộ mã nguồn vào container
COPY . .

# Tải xuống các dependencies của Go
RUN go mod download

# Sử dụng lệnh go run để phát triển mà ko cần build lại toàn bộ
CMD ["go", "run", "./cmd"]