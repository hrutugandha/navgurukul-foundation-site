import React from 'react'

const ContactSection = () => {
  return (
    <>
        <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Contact Us
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                    Get in touch with our team for any inquiries
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                            <i className="fas fa-map-marker-alt text-indigo-600"></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Address</h3>
                            <p className="mt-2 text-gray-600">
                                Navgurukul Sarjapur Campus<br />
                                123 Education Lane<br />
                                Sarjapur, Bangalore - 562125
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                            <i className="fas fa-phone-alt text-indigo-600"></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                            <p className="mt-2 text-gray-600">
                                Admissions: +91 9876543210<br />
                                General Inquiries: +91 8765432109
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                            <i className="fas fa-envelope text-indigo-600"></i>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Email</h3>
                            <p className="mt-2 text-gray-600">
                                admissions@navgurukul.org<br />
                                info@navgurukul.org
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactSection