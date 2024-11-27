CREATE IF NOT EXISTS user_two_factor (
       two_factor_id        SERIAL PRIMARY KEY,
       user_id              SERIAL NOT NULL,
       two_factor_auth_type TEXT CHECK (two_factor_auth_type IN ('SMS', 'EMAIL', 'APP')) NOT NULL
-- ensure two_factor_id not negative
CONSTRAINT check_user_id_positive CHECK (user_id > 0)
)