"use client";
import { useState } from "react";
import Image from "next/image";
import s1 from "../assets/s1.png";

export default function Com2() {
	const [step, setStep] = useState(0);
	// Step 0: Com.js from 2a
	// Step 1: Com.js from 2b
	// Step 2: Com.js from 2c

	// State for table in step 1 (Com.js from 2b)
	const [tableData, setTableData] = useState({
		friendshipBands: { sellingPrice: "", quantity: "__", totalCost: "__" },
		bagTags: { sellingPrice: "", quantity: "__", totalCost: "__" },
		keychains: { sellingPrice: "", quantity: "__", totalCost: "__" }
	});
	const [isCalculated, setIsCalculated] = useState(false);

	const handleSellingPriceChange = (item, value) => {
		setTableData(prev => ({
			...prev,
			[item]: {
				...prev[item],
				sellingPrice: value
			}
		}));
	};
	const calculateValues = () => {
		const updatedData = {
			friendshipBands: {
				sellingPrice: tableData.friendshipBands.sellingPrice,
				quantity: "15",
				totalCost: `$${3 * 15}`
			},
			bagTags: {
				sellingPrice: tableData.bagTags.sellingPrice,
				quantity: "15",
				totalCost: `$${2 * 15}`
			},
			keychains: {
				sellingPrice: tableData.keychains.sellingPrice,
				quantity: "15",
				totalCost: `$${3 * 15}`
			}
		};
		setTableData(updatedData);
		setIsCalculated(true);
	};
	const totalCost = isCalculated ? 45 + 30 + 45 : 0;

	// Step 0: Com.js from 2a
	if (step === 0) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
				<div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">
					<div className="space-y-6">
						<p className="text-xl leading-relaxed mb-8">
							Now Leo has learned how to start a business. He has decided to sell friendship bands, bag tags, and keychains at a school fair. He wants to check if people like his products, but he is unsure about:
						</p>
						<div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
							<ul className="list-disc list-inside space-y-4">
								<li className="text-xl leading-relaxed flex items-start">
									<span className="text-yellow-600 font-bold mr-3">1.</span>
									<span>What quantity should he prepare for a week?</span>
								</li>
								<li className="text-xl leading-relaxed flex items-start">
									<span className="text-yellow-600 font-bold mr-3">2.</span>
									<span>How much money will he require to start?</span>
								</li>
								<li className="text-xl leading-relaxed flex items-start">
									<span className="text-yellow-600 font-bold mr-3">3.</span>
									<span>How much should he charge for each product to make a profit?</span>
								</li>
							</ul>
						</div>
						<div className="mb-8">
							<div className="flex justify-start mb-6">
								<Image src={s1} alt="Leo planning his business" width={400} height={400} />
							</div>
						</div>
						<div className="text-center">
							<button
								onClick={() => setStep(1)}
								className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Step 1: Com.js from 2b
	if (step === 1) {
			return (
				<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
					<div className="max-w-6xl bg-white shadow-xl rounded-2xl p-8 text-left">
						<div className="overflow-x-auto mb-8">
							<table className="w-full border-collapse border-2 border-gray-300 text-lg">
								<thead>
									<tr className="bg-blue-100">
										<th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Item</th>
										<th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Cost Per Item</th>
										<th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Selling Price (STUDENT HAS TO FILL)</th>
										<th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Quantity Needed</th>
										<th className="border-2 border-gray-300 px-4 py-3 font-bold text-center">Total Cost</th>
									</tr>
								</thead>
								<tbody>
									{/* Friendship bands row */}
									<tr>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">Friendship bands</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">$3</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">
											<input
												type="number"
												value={tableData.friendshipBands.sellingPrice}
												onChange={(e) => handleSellingPriceChange('friendshipBands', e.target.value)}
												className="w-20 text-center border border-gray-400 rounded px-2 py-1"
												placeholder="__"
											/>
										</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.friendshipBands.quantity}</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.friendshipBands.totalCost}</td>
									</tr>
									{/* Bag tags row */}
									<tr>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">Bag tags</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">$2</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">
											<input
												type="number"
												value={tableData.bagTags.sellingPrice}
												onChange={(e) => handleSellingPriceChange('bagTags', e.target.value)}
												className="w-20 text-center border border-gray-400 rounded px-2 py-1"
												placeholder="__"
											/>
										</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.bagTags.quantity}</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.bagTags.totalCost}</td>
									</tr>
									{/* Keychains row */}
									<tr>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">Keychains</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">$3</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">
											<input
												type="number"
												value={tableData.keychains.sellingPrice}
												onChange={(e) => handleSellingPriceChange('keychains', e.target.value)}
												className="w-20 text-center border border-gray-400 rounded px-2 py-1"
												placeholder="__"
											/>
										</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.keychains.quantity}</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">{tableData.keychains.totalCost}</td>
									</tr>
									{/* Total row */}
									<tr className="bg-yellow-100 font-bold">
										<td className="border-2 border-gray-300 px-4 py-3 text-center">TOTAL</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">—</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center"></td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">__</td>
										<td className="border-2 border-gray-300 px-4 py-3 text-center">
											{isCalculated ? `$${totalCost}` : "__"}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="text-center">
							{!isCalculated && (
								<button
									onClick={calculateValues}
									className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200"
								>
									Update quantity and total cost
								</button>
							)}
							{isCalculated && (
								<button
									onClick={() => setStep(2)}
									className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold text-xl rounded-xl shadow-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200"
								>
									Next
								</button>
							)}
						</div>
					</div>
				</div>
			);
	}

	// Step 2: Com.js from 2c
	if (step === 2) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
				<div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8 text-left">
					<div className="space-y-6">
						<p className="text-xl leading-relaxed">
							Leo also needs money for advertising, like making posters to tell people about his friendship bands, bag tags, and keychains.
						</p>
						<div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
							<ol className="list-decimal list-inside space-y-4">
								<li className="text-xl leading-relaxed">
									Let&apos;s say the total cost for making 100 posters is <span className="font-bold text-green-600">$30</span>
								</li>
								<li className="text-xl leading-relaxed">
									So this money will be added to the total amount i.e. <span className="font-bold text-blue-600">$120 + $30 = $150</span>
								</li>
							</ol>
						</div>
						<div className="bg-green-100 p-6 rounded-xl border-2 border-green-300">
							<h3 className="text-2xl font-bold text-green-800 mb-2">Total Business Investment</h3>
							<p className="text-xl text-green-700">
								Leo needs a total of <span className="font-bold text-2xl">$150</span> to start his business at the school fair!
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
