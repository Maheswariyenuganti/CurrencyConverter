

// import { useState } from 'react'

// import Input from './componenets/Input'
// import useCurrencyInfo from './hooks/useCurrencyInfo'
// function App() {
//  const [amount,setAmount]=useState(0);
//  const [from,setFrom]=useState("usd");
//  const [to,setTo]=useState("inr");
//  const [convertedAmount,setConvertedAmount]=useState(0);
// const currencyInfo=useCurrencyInfo(from);


// const options=Object.keys(currencyInfo)
// const swap=()=>{
//   setFrom(to);
//   setTo(from);
//   setConvertedAmount(amount);
//   setAmount(convertedAmount);
// }
// const convert=()=>{
//   setConvertedAmount(amount * currencyInfo[to])
// }

//   return (
//     <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//             backgroundImage: `url('https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
//         }}
//     >
//         <div className="w-full">
//             <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                 <form
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         convert()
                       
//                     }}
//                 >
//                     <div className="w-full mb-1">
//                         <Input
//                             label="From"
//                             amount={amount}
//                            currencyOptions={options}
//                            onCurrencyChange={(currency)=>{
//                             setFrom(currency);
//                             setAmount(0)

//                            }}
//                            selectCurrency={from}
//                            onAmountChange={(amount)=> setAmount(amount)}
//                         />
//                     </div>
//                     <div className="relative w-full h-0.5">
//                         <button
//                             type="button"
//                             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                             onClick={swap}
//                         >
//                             swap
//                         </button>
//                     </div>
//                     <div className="w-full mt-1 mb-4">
//                         <Input
//                             label="To"
//                           amount={convertedAmount}
//                           currencyOptions={options}
//                           onCurrencyChange={(currency) => {
//                             setTo(currency);
//                             convert(); // Recalculate conversion on currency change
//                           }}
//                           selectCurrency={to}
                          

//                         />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                         Convert {from.toUpperCase()} to {to.toUpperCase()}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default App
import { useState } from 'react';
import Input from './componenets/Input';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                  setAmount(0); // Reset the amount when currency changes
                }}
                selectCurrency={from} // Ensure selectCurrency reflects the current value of 'from'
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                  convert(); // Recalculate conversion on currency change
                }}
                selectCurrency={to} // Ensure selectCurrency reflects the current value of 'to'
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
