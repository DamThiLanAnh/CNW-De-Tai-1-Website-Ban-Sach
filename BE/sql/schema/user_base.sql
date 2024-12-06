-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS user_base
(
    user_id          SERIAL PRIMARY KEY,                  --User ID
    user_account     VARCHAR(255) NOT NULL,               --User account (user to verify identity)
    user_password    VARCHAR(255) NOT NULL,               --User password
    user_salt        VARCHAR(255) NOT NULL,               --User salt for password encryption
    -- is Two Factor Enabled
    user_login_time  TIMESTAMP    NULL,                   --last login time
    user_logout_time TIMESTAMP    NULL,                   --last logout time
    user_login_ip    VARCHAR(45)  NULL,                   --Login ip address
    user_created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP, --record creation time
    user_update_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, --record update time
    -- Ensure user_account is unique
    CONSTRAINT unique_user_account UNIQUE (user_account)
);

-- +goose StatementEnd
-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS user_base;
-- +goose StatementEnd
