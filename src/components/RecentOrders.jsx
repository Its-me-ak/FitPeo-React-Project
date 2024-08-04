

const RecentOrders = () => {
    const orders = [
        {
            customer: "Wade Warren",
            orderNo: "15478256",
            amount: "$124.00",
            status: "Delivered",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J0LGXy13x_zo06hXNmf6BPcP1abXXSdHJA&s"
        },
        {
            customer: "Jane Cooper",
            orderNo: "45965786",
            amount: "$365.02",
            status: "Delivered",
            imgSrc: "https://i.pinimg.com/736x/59/a7/10/59a7103c8dcc215876ac91bd17e48a57.jpg"
        },
        {
            customer: "Guy Hawkins",
            orderNo: "78958215",
            amount: "$45.88",
            status: "Cancelled",
            imgSrc: "https://joyfuljourneyhotsprings.com/wp-content/uploads/2013/07/photodune-4276142-smiling-portraits-xl_111.jpg"
        },
        {
            customer: "Kristin Watson",
            orderNo: "20965732",
            amount: "$65",
            status: "Pending",
            imgSrc: "https://s3.envato.com/files/281015164/645Z3864%20copy.jpg"
        },
        {
            customer: "Cody Fisher",
            orderNo: "95715620",
            amount: "$545",
            status: "Delivered",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKZvzLN51jnM19davuPUPGFc5e2bilFjRtaAFA9JuL6eR_JnIRZZsoF0-icxAkJXPgOU&usqp=CAU"
        },
        {
            customer: "Savannah Nguyen",
            orderNo: "78514568",
            amount: "$128",
            status: "Delivered",
            imgSrc: "https://media.istockphoto.com/id/1320651997/photo/young-woman-close-up-isolated-studio-portrait.jpg?s=612x612&w=0&k=20&c=lV6pxz-DknISGT2jjiSvUmSaw0hpMDf-dBpT8HTSAUI="
        },
    ];
  return (
      <div className='w-full grid grid-cols-1 p-5 bg-[#1f2029] rounded-md'>
        <h2 className="text-2xl text-gray-100 font-bold mb-5 capitalize">recent orders</h2>

          <div className="overflow-x-auto">
              <table className="sm:w-full w-[450px] text-sm text-left rtl:text-right">
                  <thead className="text-xs text-gray-200 uppercase bg-transparent border-b border-gray-700">
                      <tr>
                          <th scope="col" className="px-2 py-3">
                              Customer
                          </th>
                          <th scope="col" className="px-2 py-3">
                              Order No.
                          </th>
                          <th scope="col" className="px-2 py-3">
                              Amount
                          </th>
                          <th scope="col" className="px-2 py-3">
                              Status
                          </th>
                      </tr>
                  </thead>
                  <tbody className="text-gray-400 space-y-2">
                      {orders.map((order, index) => (
                          <tr
                              key={index}
                              className="bg-transparent border-b border-gray-700 space-y-3"
                          >
                              <td
                                  scope="row"
                                  className="px-2 py-4 font-medium whitespace-nowrap flex gap-2 items-center"
                              >
                                  <img
                                      src={order.imgSrc}
                                      className="h-10 w-10 rounded-full object-cover"
                                      alt=""
                                  />
                                  <span>{order.customer}</span>
                              </td>
                              <td className="px-2 py-4">{order.orderNo}</td>
                              <td className="px-2 py-4">{order.amount}</td>
                              <td
                                  className="text-center w-16"
                              >
                                  <span className={`px-2 py-1 rounded-lg ${order.status === "Delivered"
                                      ? "bg-green-700/[0.4] text-green-400"
                                      : "bg-red-700/[0.4] text-red-400"
                                      }`}>
                                      {order.status}
                                 </span>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>

          

    </div>
  )
}

export default RecentOrders
