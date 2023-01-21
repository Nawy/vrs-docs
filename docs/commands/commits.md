---
sidebar_position: 2
---

# Commits
All information about commit group commands

### New
Create new commit:
```bash
vrs commit new "commit name"
```

### List
Get history commits:
```bash
vrs commits
```
or 
```bash
vrs commit list
```

### Info
Information about commit:
```bash
vrs commit info <commit_hash>
```

### Rollback
Undo all commits after current:
```bash
vrs commit rollback <commit_hash>
```

### Undo
Undo single commit:
```bash
vrs commit undo <commit_hash>
```

### Apply
Apply single commit:
```bash
vrs commit apply <commit_hash>
```

### Help
Commands information:
```bash
vrs commit help
```