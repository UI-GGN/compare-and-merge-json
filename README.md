# compare-and-merge-json

Tool to compare two json files, get the difference and merge the files.

## Install

```shell
npm install -g compare-and-merge-json
```

## Run

When installed you can run the `cmj` command from your command line.

For example

```shell
cmj -s source.json -d destination.json -o output
```

The above command will create two files under output folder
1. `missingData.json` will have missing source key and values from destination file.
2. `mergedData.json` will have destination data with addition of missing source key and values.

## Options

For options, you can also run help

```shell
cmj --help
```

<table>
  <thead>
    <tr>
      <th>Flag</th>
      <th>Short Flag</th>
      <th>Description</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>--src</td>
      <td>-s</td>
      <td>Source json file path (both relative and absolute paths are accepted).</td>
      <td>String</td>
      <td>True</td>
      <td>None</td>
    </tr>
    <tr>
      <td>--dest</td>
      <td>-d</td>
      <td>Destination json file path (both relative and absolute paths are accepted).</td>
      <td>String</td>
      <td>True</td>
      <td>None</td>
    </tr>
    <tr>
      <td>--out</td>
      <td>-o</td>
      <td>Output folder path (both relative and absolute paths are accepted).</td>
      <td>String</td>
      <td>False</td>
      <td>dist/cmj</td>
    </tr>
  </tbody>
</table>
