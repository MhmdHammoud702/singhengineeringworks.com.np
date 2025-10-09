import React, { useState } from 'react';

const BookingForm = () => {
const [formData, setFormData] = useState({
fullName: '',
companyName: '',
email: '',
phone: '',
location: '',
contactMethod: '',
serviceType: '',
projectDescription: '',
startDate: '',
file: null,
comments: ''
});

const handleChange = (e) => {
const { name, value, files } = e.target;
setFormData((prevData) => ({
...prevData,
[name]: files ? files[0] : value
}));
};

const handleSubmit = (e) => {
e.preventDefault();
// Here you can handle form submission, e.g. send to backend or API
console.log('Form Data Submitted:', formData);
alert("Your booking has been submitted successfully!");
setFormData({fullName: '', companyName: '', email: '', phone: '', location: '', contactMethod: '', serviceType: '', projectDescription: '', startDate: '', file: null, comments: ''});
};

const serviceOptions = [
{ label: "Diesel Plant & Generator Unit", group: "Power & Utilities" },
{ label: "Mini Boiler Plant", group: "Power & Utilities" },
{ label: "Small Hydro Plant", group: "Power & Utilities" },
{ label: "Deep Boring System", group: "Power & Utilities" },
{ label: "Water Purification Plants", group: "Water & Waste Management" },
{ label: "Sludge Tank Construction", group: "Water & Waste Management" },
{ label: "Tea Estate Related Machinery", group: "Agricultural & Estate" },
{ label: "Distillery Unit", group: "Agricultural & Estate" },
{ label: "Iron Bridge Construction", group: "Construction & Structures" },
{ label: "Construction of Ferry", group: "Construction & Structures" },
{ label: "Metal Fabrication", group: "Construction & Structures" },
{ label: "Light Engineering Works", group: "Construction & Structures" },
{ label: "Heavy Engineering Works", group: "Construction & Structures" },
{ label: "Erection Works", group: "Construction & Structures" },
{ label: "Heavy Structures", group: "Construction & Structures" },
{ label: "Light Structures", group: "Construction & Structures" }
];

const groupedServices = serviceOptions.reduce((groups, service) => {
const { group, label } = service;
if (!groups[group]) groups[group] = [];
groups[group].push(label);
return groups;
}, {});

return (
<div className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-8'>
    <h2 className="text-[38px] text-[#1A1A1A] font-[800] text-center mb-6">Engineering Services Booking Form</h2>
    <form onSubmit={handleSubmit} className='space-y-4'>
    <div>
      <label className='font-medium block'>Full Name *</label><br />
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'/>
    </div>

    <div>
      <label className='font-medium block'>Company Name </label><br />
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'/>
    </div>

    <div>
      <label className='font-medium block'>Email Address *</label><br />
      <input type="email" name="email" value={formData.email} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'/>
    </div>

    <div>
      <label className='font-medium block'>Phone Number *</label><br />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'/>
    </div>

    <div>
      <label className='font-medium block'>Project Location *</label><br />
      <input type="text" name="location" value={formData.location} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'/>
    </div>

    <div>
      <label className='font-medium block'>Preferred Contact Method *</label><br />
      <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'>
        <option value="">-- Select --</option>
        <option value="Email">Email</option>
        <option value="Phone">Phone</option>
        <option value="WhatsApp">WhatsApp</option>
      </select>
    </div>

    <div>
      <label className='font-medium block'>Service Type *</label><br />
      <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className='w-full border border-gray-300 rounded-md p-2'>
        <option value="">-- Select a Service --</option>
        {Object.entries(groupedServices).map(([group, services]) => (
          <optgroup label={group} key={group}>
            {services.map((service) => (
              <option value={service} key={service}>{service}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>

    <div>
      <label className='font-medium block'>Project Description *</label><br />
      <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'></textarea>
    </div>

    <div>
      <label className='font-medium block'>Preferred Start Date *</label><br />
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'/>
    </div>

    <div>
      <label className='font-medium block'>Upload Related Documents (if any)</label><br />
      <input type="file" name="file" onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'/>
    </div>

    <div>
      <label className='font-medium block'>Additional Comments</label><br />
      <textarea name="comments" value={formData.comments} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2'></textarea>
    </div>

    <br />
    <button type="submit" className='bg-[#77c720] text-white px-4 py-4 rounded-lg hover:bg-[#130346] cursor-pointer font-medium'>Submit Booking</button>
  </form>
</div>
);
};

export default BookingForm;