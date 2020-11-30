# newman-reporter-json-runstats

newman JSON reporter created to get just what I needed from the original JSON reporter and to get around this bug: https://github.com/Paramagnetic/newman-reporter-json-light/issues/1

The output contains only the **.run.stats** object

## Example:
``` PS
newman run "collection.json" -e "env.json" -g "globals.json" -r "json-runstats" --reporter-json-export "results.json"
```
