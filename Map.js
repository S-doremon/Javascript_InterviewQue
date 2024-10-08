const companies = [
    {name: "Google", category:"Product Based", start:1981, end:2004},
    {name: "Amazon", category:"Product Based", start:1992, end:2008},
    {name: "Paytm", category:"Product Based", start:1999, end:2007},
    {name: "Mindtree", category:"Product Based", start:1989, end:2010}
];

const ages=[33, 12, 35, 16, 19, 45,38, 59, 69];

companies.map((company, index)=>{
    console.log(company,index)
})
//display only company name
companies.map((company, index)=>{
    console.log(company.name)
})

//using Stringliteral display company name and start
const dummy = companies.map((company,index)=>{
    return `${company.name} ${company.start}`
})
console.log(dummy);

//display name in caps
const names =companies.map((camp)=>camp.name.toUpperCase());
console.log(names);
