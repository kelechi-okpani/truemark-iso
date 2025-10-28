"use client";
import React from "react";

const PaymentDeduction = () => {
  const vatRate = 0.075; // 7.5%
  const chargeRate = 0.02; // 2%

  const total = 900000; // Base total before VAT and charge

  // Calculate values
  const vat = total * vatRate;        // ₦67,500
  const charge = total * chargeRate;  // ₦18,000
  const grandTotal = total + vat + charge; // ₦985,500

  // Now remove VAT and charge from grandTotal
  const afterVat = grandTotal - vat;       // ₦918,000 (after VAT removed)
  const afterCharge = grandTotal - charge; // ₦967,500 (after charge removed)
  const afterBoth = grandTotal - vat - charge; // ₦900,000 (final remaining)

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);

  return (
    <div className='flex justify-between'>
      <div className="bg-white rounded-lg mt-5 p-6 shadow-lg max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Payment Summary</h2>
        <div className="space-y-6 text-gray-700">

          <div className="flex justify-between">
            <span>Removed VAT (7.5%):</span>
            <span className="font-medium text-green-600">+ {formatCurrency(vat)}</span>
          </div>

          <div className="flex justify-between">
            <span>Removed Service Charge (2%):</span>
            <span className="font-medium text-green-600">+ {formatCurrency(charge)}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-gray-900">
            <span>Grand Total (incl. VAT & Charge):</span>
            <span>{formatCurrency(grandTotal)}</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg mt-5 p-6 shadow-lg max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">After Payment Summary -- ADMIN</h2>

        <div className="space-y-3 text-gray-700">
          {/*<div className="flex justify-between">*/}
          {/*  <span>Grand Total (incl. VAT & Charge):</span>*/}
          {/*  <span className="font-medium">{formatCurrency(grandTotal)}</span>*/}
          {/*</div>*/}

          <div className="flex justify-between">
            <span>Removed VAT (7.5%):</span>
            <span className="font-medium text-red-600">- {formatCurrency(vat)}</span>
          </div>

          <div className="flex justify-between">
            <span>Removed Service Charge (2%):</span>
            <span className="font-medium text-red-600">- {formatCurrency(charge)}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total After Removing Both:</span>
            <span>{formatCurrency(afterBoth)}</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PaymentDeduction;
