---
sidebar_position: 5
---

# Options

## Instant
Will return full json after full completion. Could be used on any command.

### Request
```bash
vrs --instant commits
```
### Response:
```json
{
  "changelist": {
    "new": [],
    "modified": [],
    "removed": []
  },
  "result": {
    "status": "Ok",
    "duration": 0.003
  },
  "messages": [],
  "warnings": [],
  "errors": []
}
```

## Json
Will return intermediate processing result line by line when it's possible

### Request
```bash
vrs --json commits
```
### Response:
```json
{"command":"Begin","name":"Analyzing","amount":0}
{"command":"End","name":"Analyzing"}
{"new":[],"modified":[],"removed":[]}
{"status":"Ok","duration":0.003}
```

## Version
```bash
vrs --version
```

## Help
```bash
vrs --help
```