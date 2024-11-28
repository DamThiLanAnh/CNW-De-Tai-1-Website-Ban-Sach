package config

import "github.com/spf13/viper" //Quản lý cấu hình với viper giúp dự án dễ mở rộng và bảo trì

// Khai bao mot bien toan cuc

// Config chua tat ca cac bien cau hinh cua ung dung ta doc tu tep moi truong (local.yaml)
type Config struct {
	DbSource *string `map structure:"DB_SOURCE"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigName("local")
	viper.SetConfigType("yaml")
	viper.AutomaticEnv() //Tự động ánh xạ biến môi trường

	err = viper.ReadInConfig()
	if err != nil {
		return
	}
	return config, nil
}
