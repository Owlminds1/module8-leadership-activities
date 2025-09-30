"use client"
import React, { useState } from "react"
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

export default function Com() {
  const [step, setStep] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8">
        <div className="space-y-8">
          {step < 5 ? (
            <>
              {step >= 0 && (
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-gray-800">Mia has started selling her healthy lunchboxes at school.</h1>
                  <p className="text-xl text-gray-600">But wait, she&apos;s not the only one! Other stalls are selling lunchboxes too.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 p-2">
                          <Image src={s1} alt="s1" width={200} height={200} className="rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-800">Sam&apos;s Snack Spot</div>
                        <div className="text-base text-gray-600">$9 (Cost = $6, Profit = $3 per box)</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-2xl bg-gradient-to-br from-rose-200 to-pink-200 p-2">
                          <Image src={s2} alt="s2" width={200} height={200} className="rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-800">Lily&apos;s Lunch Lane</div>
                        <div className="text-base text-gray-600">$5 (Cost = $4, Profit = $1 per box)</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-2xl bg-gradient-to-br from-teal-200 to-cyan-200 p-2">
                          <Image src={s3} alt="s3" width={200} height={200} className="rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-800">Ben&apos;s Bite Box</div>
                        <div className="text-base text-gray-600">$7 (Cost = $5, Profit = $2 per box)</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step >= 1 && (
                <div className="">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-4 shadow-lg">
                    <div className="text-xl font-bold text-gray-800">Look at the prices, which shop do you think most students will choose? Why?</div>
                  </div>
                </div>
              )}

              {step >= 2 && (
                <div >
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-2xl p-4 shadow-lg">
                    <div className="text-xl font-bold text-gray-800">But does least expensive always mean better for business?</div>
                  </div>
                </div>
              )}

              {step >= 3 && (
                <div>
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-2 border-slate-200 rounded-2xl p-4 shadow-lg">
                    <div className="text-xl font-bold text-gray-800">Which shop makes the most profit per box?</div>
                  </div>
                </div>
              )}

              {step >= 4 && (
                <div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
                    <div className="text-xl text-gray-700">Sam&apos;s Snack Spot = $3 profit per box, highest individual profit.</div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {step === 5 && (
                <div className="pt-6">
                  <div className="text-3xl font-bold text-gray-800 mb-6">Sales of all three businesses in last month</div>
                  <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border-2 border-gray-200">
                    <table className="min-w-full text-left">
                      <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Business name</th>
                          <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Lunchboxes sold</th>
                          <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Profit per Lunchbox</th>
                          <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Sam&apos;s Snack Spot</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">20</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$3</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$60</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Lily&apos;s Lunch Lane</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">60</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$1</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$60</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Ben&apos;s Bite Box</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">40</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$2</td>
                          <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {step === 6 && (
                <>
                  <div className="pt-6">
                    <div className="text-3xl font-bold text-gray-800 mb-6">Sales of all three businesses in last month</div>
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border-2 border-gray-200">
                      <table className="min-w-full text-left">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                          <tr>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Business name</th>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Lunchboxes sold</th>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Profit per Lunchbox</th>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Profit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Sam&apos;s Snack Spot</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">20</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$3</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$60</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Lily&apos;s Lunch Lane</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">60</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$1</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$60</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Ben&apos;s Bite Box</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">40</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$2</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-gray-800">So made the most profit?</div>
                    </div>
                  </div>
                </>
              )}

              {step === 7 && (
                <>
                  <div className="pt-6">
                    <div className="text-3xl font-bold text-gray-800 mb-6">Sales of all three businesses in last month</div>
                    <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border-2 border-gray-200">
                      <table className="min-w-full text-left">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                          <tr>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Business name</th>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Lunchboxes sold</th>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Profit per Lunchbox</th>
                            <th className="px-6 py-4 text-xl font-bold text-gray-800 border-b-2 border-gray-300">Profit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Sam&apos;s Snack Spot</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">20</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$3</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$60</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Lily&apos;s Lunch Lane</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">60</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$1</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$60</td>
                          </tr>
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-lg font-semibold text-gray-800 border-b border-gray-200">Ben&apos;s Bite Box</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">40</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$2</td>
                            <td className="px-6 py-4 text-lg text-gray-700 border-b border-gray-200">$80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-gray-800">So made the most profit?</div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-2xl p-6 shadow-lg">
                      <div className="text-xl text-gray-700">Ben&apos;s Bite Box</div>
                    </div>
                  </div>
                </>
              )}

              {step === 8 && (
                <div className="pt-6">
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl p-8 shadow-lg">
                    <div className="text-2xl font-bold text-gray-800">If you were Mia, what price would you set for your lunchbox?</div>
                  </div>
                </div>
              )}

              {step === 9 && (
                <>
                  <div className="pt-6">
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl p-8 shadow-lg">
                      <div className="text-2xl font-bold text-gray-800">If you were Mia, what price would you set for your lunchbox?</div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 rounded-2xl p-8 shadow-lg">
                      <div className="text-2xl font-bold text-gray-800">Would you prefer lots of customers and smaller profits per box, OR fewer customers but higher profits per box?</div>
                    </div>
                  </div>
                </>
              )}

              {step === 10 && (
                <>
                  <div className="pt-6">
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl p-8 shadow-lg">
                      <div className="text-2xl font-bold text-gray-800">If you were Mia, what price would you set for your lunchbox?</div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200 rounded-2xl p-8 shadow-lg">
                      <div className="text-2xl font-bold text-gray-800">Would you prefer lots of customers and smaller profits per box, OR fewer customers but higher profits per box?</div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200 rounded-2xl p-8 shadow-lg">
                      <div className="text-2xl font-bold text-gray-800">Do you think some shops set higher prices on purpose to look more &apos;special&apos; or &apos;exclusive&apos;? Why might that work?</div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {step < 10 && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setStep(s => Math.min(s + 1, 10))}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
