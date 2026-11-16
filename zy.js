
let customerName = "Seth";
let phoneNumber = "08012345678";
let isRegistered = true;
let airtimeBalance = 2000;
let selectedBundle = 2;


console.log("Customer Name:", customerName);
console.log("Phone Number:", phoneNumber);
console.log("Registration Status:", isRegistered);
console.log("Airtime Balance:", airtimeBalance);
console.log("Selected Bundle:", selectedBundle);



let bundleAllowance = "";
let bundlePrice = 0;
let isValidBundle = true;

switch (selectedBundle) {

    case 1:
        bundleAllowance = "500MB";
        bundlePrice = 200;
        break;

    case 2:
        bundleAllowance = "1GB";
        bundlePrice = 350;
        break;

    case 3:
        bundleAllowance = "2GB";
        bundlePrice = 600;
        break;

    case 4:
        bundleAllowance = "5GB";
        bundlePrice = 1500;
        break;

    default:
        console.log("Invalid bundle code");
        isValidBundle = false;
}

console.log("Selected Bundle:", bundleAllowance);
console.log("Bundle Price:", bundlePrice);
console.log("Valid Bundle:", isValidBundle);



if (isRegistered === false) {

    console.log("Purchase rejected: Customer is not registered");

} else if (airtimeBalance < 0) {

    console.log("Invalid airtime balance");

} else if (isValidBundle === false) {

    console.log("Purchase rejected: Invalid bundle");

} else if (airtimeBalance < bundlePrice) {

    console.log("Purchase rejected: Insufficient airtime");

} else {

    airtimeBalance = airtimeBalance - bundlePrice;

    console.log("Purchase Successful!");
    console.log("Customer Name:", customerName);
    console.log("Bundle:", bundleAllowance);
    console.log("Amount Deducted:", bundlePrice);
    console.log("Remaining Balance:", airtimeBalance);

}


