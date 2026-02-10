function fibonacci(n){
    let res=[];
    let a=0,b=1;
    for(let i=0;i<n;i++){
        res.push(a);
        [a,b]=[b,a+b];
    }
    return res;
}

function isPrime(n){
    if(n<2) return false;
    for(let i=2;i*i<=n;i++){
        if(n%i===0) return false;
    }
    return true;
}

function prime(arr){
    return arr.filter(isPrime);
}

function gcd(a,b){
    return b===0?a:gcd(b,a%b);
}

function hcf(arr){
    if(arr.length===0) return 0;
    return arr.reduce((acc,val)=>gcd(acc,val));
}

function lcm(arr){
    if(arr.length===0) return 0;
    return arr.reduce((acc,val)=>(acc*val)/gcd(acc,val));
}

module.exports={fibonacci,prime,hcf,lcm};
