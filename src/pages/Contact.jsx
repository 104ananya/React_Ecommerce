import React from "react";

const Contact = () => {
  return (
    <main className=" relative mt-[75px]">
      <section className="grid grid-cols-2 mx-20 bg-gray-200">
        {/* Content for the first column */}
        <div className="flex justify-center items-center">
          <div className="py-10 pl-20 pr-10">
            <h1 className="text-4xl font-bold mb-4">Have a Query?</h1>
            <p className="text-lg mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <p className="text-lg mt-3">
              Fill out our form and we will contact you within 24 hours.
            </p>

            <p className="text-base mt-5">Emails: customer@exclusive.com</p>

            <p className="text-base mt-2">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Content for the second column */}
        <div className="p-4">
          <div className="bg-gray-200 p-6 rounded-md">
            <form action="https://formspree.io/f/mjvnwzbo" method="POST">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Username"
                  name="Username"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                  name="Email"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your message"
                  name="Message"
                  rows="5"
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className=" bg-coral-red hover:bg-dark-red text-white font-bold py-2 px-4 rounded-md "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
