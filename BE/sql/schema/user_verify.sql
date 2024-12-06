-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS user_verify
(
    verify_id         SERIAL PRIMARY KEY,            -- id of OTP record
    verify_otp        VARCHAR(6)   NOT NULL,         -- OPT code (mã xác thực)
    verify_key        VARCHAR(255) NOT NULL,         -- email or phone of user dung de xac dinh ng nhan OTP
    verify_key_hash   VARCHAR(255) NOT NULL,         -- Băm của email or phone
    verify_type       INT       DEFAULT 1,           -- 1: Email, 2:Phone, 3:... (type xac thuc)
    is_verified       INT       DEFAULT 0,           -- 0: chua verify, 1: da verify
    is_deleted        INT       DEFAULT 0,           -- 0: chua xoa, 1: da xoa
    verify_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verify_update_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_verify_key unique (verify_key) -- dam bao verify-key la duy nhat
);

CREATE INDEX idx_verify_otp ON user_verify (verify_otp);

-- +goose StatementEnd
-- +goose Down

DROP TABLE user_verify