alert(1);

let obj = {
    items: []
}
let size = 1;
for (let i = 0; i < size; i++)
{
    obj.items.push({
          "partId": "00000023463532",
          "name": "ใบที่ " + (i + 1),
          "relationCode": "PRIIND",
          "owner": "P",
          "applicationId": "EC",
          "accountNumber": "557755xxxxxx0543",
          "savingLoanCode": "",
          "balanceDescription": "",
          "balance": 0,
          "combinedStatement": "N",
          "pricingIndicator": "N",
          "liabilityCode": "D",
          "productCode": "",
          "control1": "0000",
          "control2": "0000",
          "control3": "0000",
          "control4": "0000",
          "alert": "N",
          "status": "",
          "accountDateDescription": "",
          "date": "0000-00-00",
          "currency": "",
          "branchCode": "0000",
          "cardReference": "5577558200009588",
          "royalCode1": "",
          "royalCode2": ""
    });
}
obj["x_uuid"] = "39776712810131097110";
console.error(JSON.stringify(obj));