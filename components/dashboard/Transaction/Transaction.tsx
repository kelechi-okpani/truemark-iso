import { useQuery } from "@apollo/client/react";
import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";
import React from "react";
import {  useRouter } from "next/navigation";
import { GET_USER_TRANSACTION } from "@/lib/Query/queries";
import Transaction_List from "@/components/dashboard/Transaction/Transaction-List";



const empty_details = {
  title: "Transaction is empty",
  description: "Looks like you haven’t made  any Payments Yet!!.",
}


const Transactions = ()=> {
  const router = useRouter();

  const { data, loading, error} = useQuery(GET_USER_TRANSACTION, {
    variables:{page:1, pageSize:100},
    fetchPolicy: "cache-and-network",
  }) as any;



  return(
    <div>
      <header className="bg-[#387467] text-white px-6 py-8 rounded-md">
        <h1 className="text-2xl font-bold">Transaction History</h1>
      </header>

      <div>
        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] w-full">
            <CenteredLoader />
          </div>
        ) : data?.getPaymentsForAdmin?.payments?.length === 0 ? (
          <EmptyContainer
            title={empty_details.title}
            description={empty_details.description}
          />
        ) : (
          <Transaction_List data={data?.getPayments?.payments} />
        )}
      </div>
    </div>
  )
}


export default Transactions