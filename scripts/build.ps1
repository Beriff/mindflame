$DIST = "./build"
$SRC = "./src"

if (Test-Path $DIST) {
    Remove-Item $DIST -Recurse
}

New-Item -ItemType Directory -Path $DIST | Out-Null

Copy-Item -Path "$($SRC)/html"     -Destination "$($DIST)/html"       -Recurse
Copy-Item -Path "$($SRC)/resources" -Destination "$($DIST)/resources"   -Recurse
Copy-Item -Path "$($SRC)/js"        -Destination "$($DIST)/js"          -Recurse

sass "$($SRC)/styles:$($DIST)/styles"