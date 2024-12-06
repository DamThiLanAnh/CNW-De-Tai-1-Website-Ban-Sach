-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS user_two_factor
(
    two_factor_id             SERIAL PRIMARY KEY,                                                                               -- Khóa chính tự động tăng
    user_id                   INT                                                           NOT NULL,                           -- foreign key connect with table user
    two_factor_auth_type      TEXT CHECK ( two_factor_auth_type IN ('SMS', 'EMAIL', 'APP')) NOT NULL,                           -- type 2FA
    two_factor_auth_secret    VARCHAR(255)                                                  NOT NULL,                           -- Thong tin bi mat cho 2FA
    two_factor_phone          VARCHAR(20)                                                   NOT NULL,                           -- So dien thoai cho 2FA qua SMS (neu ap dung)
    two_factor_email          VARCHAR(255),                                                                                     -- dia chi email cho 2FA qua Email (neu ap dung)
    two_factor_is_active      BOOLEAN                                                       NOT NULL DEFAULT TRUE,              -- trang thai kich hoat cua phuong thuc 2FA
    two_factor_created_at     TIMESTAMP                                                              DEFAULT CURRENT_TIMESTAMP, --Thoi diem tao phuong thuc 2FA
    two_factor_created_update TIMESTAMP                                                              DEFAULT CURRENT_TIMESTAMP,--Thoi diem update phuong thuc 2FA

    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user_two_factor ON DELETE CASCADE                                       --rang buoc khoa ngoai
);
-- +goose StatementEnd
-- +goose Down

-- +goose StatementBegin
DROP TABLE IF EXISTS user_two_factor
-- +goose StatementEnd