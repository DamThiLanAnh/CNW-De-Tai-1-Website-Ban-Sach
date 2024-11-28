-- Tạo bảng
CREATE TABLE IF NOT EXISTS user_info
(
    user_id                BIGSERIAL PRIMARY KEY,               --Primary key for user ID
    user_account           VARCHAR(255) NOT NULL,               --Account of thr user
    user_nickname          VARCHAR(255),                        --Nickname of the user
    user_avatar            VARCHAR(255),                        --Avatar of the user
    user_state             SMALLINT     NOT NULL,               --User state(enum): 0-Locked, 1-Activated, 2-Not Activated
    user_mobile            VARCHAR(11),                         --User's mobile phone number
    user_gender            SMALLINT,                            --User's gender(enum): 0-Secret, 1-Male, 2-Female
    user_birthday          DATE,                                --Date of birth
    user_email             VARCHAR(255),                             --User email address
    user_is_authentication SMALLINT     NOT NULL,               --Authentication status (enum): 0-Not Authenticated, 1-Pending, 2-Authenticated, 3-Failed
-- Add timestamps for record creation and updates
    created_at             TIMESTAMP DEFAULT CURRENT_TIMESTAMP, --Record creation time
    updated_at             TIMESTAMP DEFAULT CURRENT_TIMESTAMP  --Record update time
);

-- Thêm comment cho bảng
COMMENT ON TABLE user_info IS 'User information';
COMMENT ON COLUMN user_info.user_id is 'USER ID';
COMMENT ON COLUMN user_info.user_account is 'USER ACCOUNT';
COMMENT ON COLUMN user_info.user_nickname is 'USER NICKNAME';
COMMENT ON COLUMN user_info.user_avatar is 'USER AVATAR';
COMMENT ON COLUMN user_info.user_state is 'USER STATE';
COMMENT ON COLUMN user_info.user_mobile is 'USER MOBILE';
COMMENT ON COLUMN user_info.user_gender is 'USER GENDER';
COMMENT ON COLUMN user_info.user_birthday is 'USER BIRTHDAY';
COMMENT ON COLUMN user_info.user_email is 'USER EMAIL';
COMMENT ON COLUMN user_info.user_is_authentication is 'Authentication status: 0-Not Authenticated, 1-Pending, 2-Authenticated, 3-Failed';
COMMENT ON COLUMN user_info.created_at is 'Record creation time';
COMMENT ON COLUMN user_info.updated_at is 'Record update time';

DROP TABLE IF EXISTS user_info;