import React from 'react'

export default function TeamAndConditions() {
    return (
        <>
            <div className="container my-5">
                <div className="dance bgring1">
                    <div className="row">
                        <h3 style={{ textAlign: 'center' }} className='mb-5 mt-4'>Terms  & Conditions</h3>
                        <p>AerialBelly Studio offers belly dance and aerial arts classes, workshops, and online classes. We also provide studio rental services and collaborations. By registering for classes or workshops, renting the studio, or collaborating with us, students and clients agree to abide by these terms and conditions.</p>

                        <h6 className='mt-4'> 1. Safety</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Students acknowledge that aerial arts carry inherent risks, including injury from falls or equipment malfunction.</li>
                            <li>AerialBelly Studio takes reasonable measures to ensure safety, but students assume full responsibility for their own safety and well-being.</li>
                        </ul>
                        <h6 className='mt-4'>2. Liability</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>AerialBelly Studio, its owners, employees, and instructors shall not be liable for any injury, loss, or damage suffered by students during or as a result of classes, workshops, or performances.</li>
                        </ul>
                        <h6 className='mt-4'>3. Fees and Refunds</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Fees are non-refundable and non-adjustable under any circumstances.</li>
                            <li>No refunds or credits will be given for missed classes or workshops.</li>
                        </ul>
                        <h6 className='mt-4'>4. Online Classes</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Online belly dance students must keep their video on during classes.</li>
                            <li>Class recordings can be purchased separately.</li>
                            <li>Extra charges apply for flexibility between attending online and offline belly dance classes.</li>
                        </ul>
                        <h6 className='mt-4'>5. Misbehavior</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Any misbehavior by students or their parents towards instructors or staff will lead to suspension of admission, and fees will not be refunded.</li>
                        </ul>
                        <h6 className='mt-4'>6. Mobile Phone Usage</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Using mobile phones to film classes or otherwise is not allowed.</li>
                            <li>Studio reserves the right to take class videos and photos for social media. If this is not acceptable, please inform us in advance.</li>
                        </ul>
                        <h6 className='mt-4'>7. Breach of Class Rules</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Breach of class rules will result in a penalty of ₹1000.</li>
                        </ul>
                        <h6 className='mt-4'>8. Health Issues</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>If you have any health issues, please inform the instructor in the first class and mention them in this form so that we can accommodate your needs and can serve you better.</li>
                        </ul>
                        <h6 className='mt-4'>9. Class Preparation</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Students must carry a water bottle, napkin, Yoga mat (for Aerial Arts classes) and any energy drink (if required) to classes.</li>
                            <li>Students must wear appropriate attire for classes, as instructed by the mentor.</li>
                        </ul>
                        <h6 className='mt-4'>10. Class Participation</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Students are expected to actively participate in classes and follow instructions.</li>
                            <li>Disruptive behavior or failure to follow instructions may lead to suspension of admission, after a warning.</li>
                            <li>Students/clients are responsible for bringing their own food, water, and energy drinks to classes/workshops/events, as these will not be provided by the studio.</li>
                        </ul>
                        <h6 className='mt-4'>11. Parental Attendance </h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>During classes, students' parents are not allowed to sit in the studio premises.</li>
                            <li>Parents are requested to wait in the building reception at the ground floor.</li>
                        </ul>
                        <h6 className='mt-4'>12. Fee Payment</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>If class fees are not paid on time and before the course/new cycle starts, a penalty of ₹1000 will be applied.</li>
                            <li>The penalty will increase by ₹1000 for each additional day of delay in fee payment.</li>
                        </ul>
                        <h6 className='mt-4'>13. GST</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>18% GST will be added to all purchases at the studio.</li>
                        </ul>

                        <h6 className='mt-4'>14. Certification</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Certificate will be provided via email/Whatsapp. </li>
                            <li>Certificates will be provided only to the deserving students.</li>
                        </ul>
                        <h6 className='mt-4'>15. In case of absence</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>If a student is going to be absent from future classes, they must inform the instructor in advance to ensure a smooth learning experience.</li>
                        </ul>
                        <h6 className='mt-4'>16. Class updates & information</h6>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Please ensure that each student/parent follows group messages and stays updated about classes through WhatsApp group messages.</li>
                        </ul>

                        <h3 style={{ textAlign: 'center' }} className='mb-5 mt-4'>Studio Rental and Collaboration</h3>
                        <ul style={{ listStyle: 'disc', padding: '0 32px' }}>
                            <li>Clients renting the studio or collaborating with us must leave the studio in the same condition as received.</li>
                            <li>Damage to studio properties will result in extra charges.</li>
                            <li>Clients must adhere to scheduled timings and book the studio at least 3-2 days in advance.</li>
                        </ul>
                        <p className='mt-3'>By registering for classes or workshops, renting the studio, or collaborating with us, students and clients acknowledge that they have read, understood, and agreed to these Terms and Conditions.</p>
                        {/* <p className='mb-5'>Thank you for choosing AerialBelly Studio. World class learnings, knowledge, skills, services & experience with us is Guaranteed!
                            See you!</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}
