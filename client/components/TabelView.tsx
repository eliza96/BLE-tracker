"use client";
import React from "react";
import { User, AlertCircle } from "lucide-react";

interface Elder {
  id: string;
  name: string;
  status: "Inside" | "Outside";
  updated_at: string;
}

export default function TabelView({ elders }: { elders: Elder[] }) {
  return (
    <div className="max-h-[350px] overflow-y-auto p-4 bg-white rounded-xl shadow-md border border-gray-200">
      <table className="min-w-full text-sm text-gray-800">
        <thead className="bg-gray-100 text-gray-700 text-sm font-bold border-b border-gray-300">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {elders.map((elder) => (
            <tr
              key={elder.id}
              className="border-b hover:bg-gray-50 transition-all duration-150"
            >
              <td className="px-6 py-3 font-medium">{elder.name}</td>
              <td className="px-6 py-3 flex items-center gap-2">
                <span
                  className={`text-sm font-semibold ${
                    elder.status === "Inside"
                      ? "text-green-600"
                      : "text-yellow-500"
                  }`}
                >
                  {elder.status}
                </span>
                {elder.status === "Inside" ? (
                  <User className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                )}
              </td>
              <td className="px-6 py-3 text-gray-500 text-sm">
                {new Date(elder.updated_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* اسکرول بار سفارشی فقط برای محور Y */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: #bbb;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
