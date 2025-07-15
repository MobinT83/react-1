// import React from "react";
import {
  CCard,
  CCardBody,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
} from "@coreui/react";

export const CardTitleExample = () => {
  return (
    <CCard
      className="group relative overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 rounded-3xl"
      style={{ width: "20rem", height: "28rem" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <CCardBody className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <div className="mb-6 relative">
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <CCardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500">
              ✨ Premium Card 1
            </CCardTitle>
            <CCardSubtitle className="text-lg font-medium text-gray-500 group-hover:text-gray-600 transition-colors duration-300 mb-6">
              🎯 Enhanced Experience
            </CCardSubtitle>
          </div>

          <CCardText className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300 mb-8">
            🚀 Discover amazing features with our beautifully crafted card
            component. Experience smooth animations and stunning visual effects
            that bring your content to life.
          </CCardText>
        </div>

        <div className="space-y-4">
          <CCardLink
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-decoration-none mr-3"
          >
            <span className="mr-2">🔗</span>
            Primary Link
          </CCardLink>
          <CCardLink
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-2xl hover:from-gray-200 hover:to-gray-300 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-decoration-none border border-gray-300"
          >
            <span className="mr-2">🌟</span>
            Secondary Link
          </CCardLink>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full group-hover:animate-bounce"></div>
      </CCardBody>
    </CCard>
  );
};
