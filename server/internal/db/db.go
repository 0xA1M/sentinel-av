package db

import (
	"fmt"
	"os"

	"github.com/0xA1M/sentinel-server/internal/api/utils"
	"github.com/0xA1M/sentinel-server/internal/db/migrations"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// DB is the database instance
var DB *gorm.DB

// Connect initializes the database connection
func Connect() (*gorm.DB, error) {
	// Use SQLite database file
	dbPath := getEnv("DB_PATH", "./sentinel.db")

	db, err := gorm.Open(sqlite.Open(dbPath), &gorm.Config{
		Logger: utils.GetGormLogger(),
	})
	if err != nil {
		return nil, fmt.Errorf("failed to connect to database: %v", err)
	}

	DB = db
	return db, nil
}

// Migrate runs the database migrations
func Migrate() error {
	return migrations.Migrate(DB)
}

// getEnv retrieves an environment variable or returns a default value
func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}
