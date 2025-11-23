package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"path/filepath"
)

const SERVER_URL string = "http://localhost:3000/scan-result"

type ScanResult struct {
	AgentName string   `json:"agent_name"`
	Infected  []string `json:"infected"`
}

func scanPath(path string) []string {
	infected := []string{}

	filepath.WalkDir(path, func(p string, d fs.DirEntry, err error) error {
		if err != nil {
			return nil
		}

		// Dummy logic: mark files ending with .infected as infected
		if !d.IsDir() && filepath.Ext(p) == ".infected" {
			infected = append(infected, p)
		}

		return nil
	})

	return infected
}

func reportToServer(agentName string, infected []string) {
	payload := ScanResult{
		AgentName: agentName,
		Infected:  infected,
	}
	data, _ := json.Marshal(payload)

	resp, err := http.Post(SERVER_URL, "application/json", bytes.NewBuffer(data))
	if err != nil {
		log.Println("Error reporting:", err)
		return
	}
	defer resp.Body.Close()

	fmt.Println("Reported scan result, status:", resp.Status)
}

func main() {
	var path string
	flag.StringVar(&path, "path", ".", "File or directory to scan")
	flag.Parse()

	agentName := "agent-47"

	fmt.Println("Starting agent...")
	infectedFiles := scanPath("")

	fmt.Println("Scan complete. Found:", infectedFiles)
	reportToServer(agentName, infectedFiles)
}
