import React from 'react';
import { RiSeedlingLine } from 'react-icons/ri'; // Example icon from react-icons

const FeatureComponent = () => {
  return (
    <div className="py-6 bg-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Item 1 */}
          <div className="flex items-center justify-center text-center p-2 md:p-4 rounded-lg shadow-sm">
            <RiSeedlingLine className="w-6 h-6 md:w-8 md:h-8 text-white mr-2" />
            <div>
              <p className="text-xs md:text-sm text-white">Pós Colheita de Grãos</p>
              <p className="text-xs md:text-sm text-white">Lorem Ipsum Grãos</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-center text-center p-2 md:p-4 rounded-lg shadow-sm">
            <RiSeedlingLine className="w-6 h-6 md:w-8 md:h-8 text-white mr-2" />
            <div>
              <p className="text-xs md:text-sm text-white">Pós Colheita de Grãos</p>
              <p className="text-xs md:text-sm text-white">Lorem Ipsum Grãos</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-center text-center p-2 md:p-4 rounded-lg">
            <RiSeedlingLine className="w-6 h-6 md:w-8 md:h-8 text-white mr-2" />
            <div>
              <p className="text-xs md:text-sm text-white">Pós Colheita de Grãos</p>
              <p className="text-xs md:text-sm text-white">Lorem Ipsum Grãos</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-center text-center p-2 md:p-4 rounded-lg">
            <RiSeedlingLine className="w-6 h-6 md:w-8 md:h-8 text-white mr-2" />
            <div>
              <p className="text-xs md:text-sm text-white">Pós Colheita de Grãos</p>
              <p className="text-xs md:text-sm text-white">Lorem Ipsum Grãos</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-center justify-center text-center p-2 md:p-4 rounded-lg">
            <RiSeedlingLine className="w-6 h-6 md:w-8 md:h-8 text-white mr-2" />
            <div>
              <p className="text-xs md:text-sm text-white">Pós Colheita de Grãos</p>
              <p className="text-xs md:text-sm text-white">Lorem Ipsum Grãos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
