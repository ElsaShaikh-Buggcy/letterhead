import {
  FaBuilding,
  FaCalendarAlt,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhone,
  FaRegAddressCard,
  FaUser,
} from "react-icons/fa";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useGetLetterHead } from "@/service/letterhead";
import ErrorCard from "./ErrorCard";
// const data = {
//   // letterHeadId: "PROP-121-232",
//   plotNumber: "A-101",
//   blockNumber: "B-5",
//   plotSize: "500 sq. yards",
//   memberName: "John Doe",
//   memberCnic: "42101-1234567-8",
//   date: "2025-02-11",
//   dealerOfficeName: "ABC Property Dealers",
//   dealerPhoneNumber: "+92 300 1234567",
//   dealerCnic: "42101-9876543-2",
// };

export const VerficationLetterHead = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useGetLetterHead({
    id: id ||'',
  });
  if (isLoading) {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
          <div className="relative w-full max-w-[600px] rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
            <div className="mb-6 flex flex-col items-center pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Loading...</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <ErrorCard />
      </>
    );
  }
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
        <div className="relative w-full max-w-[600px] rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
          <div className="mb-6 flex flex-col items-center pb-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/527/510/small_2x/verified-checkmark-sign-icon-symbol-logo-green-design-transparent-background-free-png.png"
              alt="Company Logo"
              className="mb-4 h-20"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              Verification Letter
            </h2>
          </div>
          <p className="absolute right-4 top-4 text-xs font-semibold text-gray-800">
            {id}
          </p>
          <hr className="my-4 border-t-2 border-gray-300 shadow-sm" />

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3 ">
              <FaMapMarkerAlt className="text-gray-600" />
              <div className="flex flex-col justify-start">
                <p className="text-sm font-medium text-gray-600 text-left">
                  Plot No:
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {data?.plotNumber}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3  mt-2">
              <FaMapMarkerAlt className="text-gray-600" />
              <div className="flex flex-col justify-start">
                <p className="text-sm font-medium text-gray-600 text-left">
                  Block No:
                </p>
                <p className="text-lg font-semibold text-gray-800 text-left">
                  {data?.blockNumber}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaRegAddressCard className="text-gray-600" />
              <div className="flex flex-col justify-start">
                <p className="text-sm font-medium text-gray-600 text-left">
                  Plot Size:
                </p>
                <p className="text-lg font-semibold text-gray-800 text-left">
                  {data?.plotSize}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaUser className="text-gray-600" />
              <div className="flex flex-col justify-start">
                <p className="text-sm font-medium text-gray-600 text-left">
                  Member Name:
                </p>
                <p className="text-lg font-semibold text-gray-800 text-left">
                  {data?.memberName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaIdCard className="text-gray-600" />
              <div className="flex flex-col justify-start">
                <p className="text-sm font-medium text-gray-600 text-left">
                  Member CNIC:
                </p>
                <p className="text-lg font-semibold text-gray-800 text-left">
                  {data?.memberCnic}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <FaCalendarAlt className="text-gray-600" />
              <div className="flex flex-col justify-start">
                <p className="text-sm font-medium text-gray-600 text-left">
                  Date:
                </p>
                <p className="text-lg font-semibold text-gray-800 text-left">
                  {moment(data?.date).format("ddd MMM DD YYYY")}
                </p>
              </div>
            </div>
          </div>
          {data?.dealerCnic && data?.dealerCnic.length > 0 && (
            <>
              <div className="mt-6 pt-6 text-gray-700">
                <hr className="my-4 border-t-2 border-gray-300 shadow-sm" />

                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Dealer Information
                </h3>
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-gray-600" />
                  <div className="flex flex-col justify-start">
                    <p className="text-sm font-medium text-gray-600 text-left">
                      Dealer Office:
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {data?.dealerOfficeName}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <FaPhone className="text-gray-600" />
                  <div className="flex flex-col justify-start">
                    <p className="text-sm font-medium text-gray-600 text-left">
                      Phone:
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {data.dealerPhoneNumber}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <FaIdCard className="text-gray-600" />
                  <div className="flex flex-col justify-start">
                    <p className="text-sm font-medium text-gray-600 text-left">
                      Dealer CNIC:
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {data.dealerCnic}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
