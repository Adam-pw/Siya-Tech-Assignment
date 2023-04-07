### Submitted By : Adam Pithenwala

* To run the website first install all the packages `npm install`
* Then start the server through `npm start`

You can visit the website here also hosted on vercel 
And you can also see the Github Repository form here 




<hr>
## Assignment: Expandable Table
Your task is to create an expandable table component in React that allows users to compress rows based on a given time period (e.g. month, quarter, year) and view the aggregated data.

Requirements:
1. Your component should accept an array of data objects with properties representing the time period (e.g. month, quarter, year) and other relevant data.
Example data:

```json
[
    { "month": "January", "indicators":[{"name":"revenue","value": 10000},{"name":"expenses","value": 8000}] },
    { "month": "February",  "indicators":[{"name":"revenue","value": 12000},{"name":"expenses","value": 10000}]  },
    { "month": "March", "indicators":[{"name":"revenue","value": 9000},{"name":"expenses","value": 7000}]   },
    { "month": "April", "indicators":[{"name":"revenue","value": 11000},{"name":"expenses","value": 9000}]   },
    { "month": "May", "indicators":[{"name":"revenue","value": 8000},{"name":"expenses","value": 6000}]   },
    { "month": "June",  "indicators":[{"name":"revenue","value": 14000},{"name":"expenses","value": 12000}]  }
]
```
2. Your table should display the data in a tabular format with columns representing the time period and relevant data properties.
Example table:
~
```yaml
|	     |January|February|March| April|May  | June  |
|Revenue | 	10000|	12000 |	9000| 11000|8000 |	14000|
|Expenses|	8000 |	10000 |	7000| 9000 |6000 |	12000|
```
3. Your table should allow users to click on a given time period (e.g. month) to compress the table and display aggregated data (e.g. quarterly or yearly).

Example compressed table (by quarter):
```yaml
|	     |   Q1  |  Q2    |
|Revenue | 	31000|	25000 |
|Expenses|	32000|	27000 |
```

4. Your table should allow users to click on the compressed data to expand the table back to the original format.

Bonus:
* Allow users to customize the time period used for compression (e.g. month, quarter, year).
* Add animations to the expansion and compression of the table.

Points considered while scoring.
1. Mobile responsiveness
2. Code structure.
3. Total no. of points covered from the above requirements

Solve the challenge using react libraries
1. react-core
2. chakra-ui (https://chakra-ui.com/getting-started)

Submission:
Please submit your code as a zip file via email. Your submission should include a README.md file with instructions on how to run your code and any relevant information about your implementation.