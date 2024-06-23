import React from 'react'
import _ from 'lodash';

const CompanyFilter = ({companyArray, updateCompanyFilter}) => {
  // console.log(companyArray);

  return (
    <div className="pl-6 pr-6 mr-12">
      <h3 className="font-bold mb-4">Companies</h3>

      <div>
        {companyArray.map((currElem, index) => {
          return (
            <button
              key={index}
              type="button"
              name="company"
              value={currElem}
              onClick={updateCompanyFilter}
              className="text-gray-600 flex w-full hover:border-b border-coral-red mb-2"
            >
              {_.capitalize(currElem)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyFilter