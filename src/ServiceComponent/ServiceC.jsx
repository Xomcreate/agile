import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function ServiceC() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const services = [
    {
      title: "HR Consultancy",
      sub: [
        {
          title: "Organisational Design and Structure",
          content: `The design and structure of your organization directly impact its performance. Effective organizational design integrates people, structures, processes, and systems while considering the external environment. Whether you're preparing for growth or undergoing a restructure, it's crucial to maintain a focus on organizational design to ensure efficiency.

We have a proven track record in developing organizational design solutions tailored to our clients' unique operating environments. Our experienced team works across various industries, including government and the private sector. We begin with a comprehensive analysis of your business to understand its strategic direction, culture, challenges, and processes. From this, we identify areas for improved performance and alignment, and then create detailed workflows, functional descriptors, and job descriptions to clarify accountability and responsibility at every level.`,
        },
        {
          title: "HR Strategy Development",
          content: `HR strategy is an integral part of engaging people to achieve corporate goals, create an attractive work environment, and foster a strong organizational culture. An effective HR strategy provides focus and clarity for all people-related issues and helps to engage everyone toward achieving a common goal.

Our approach is focused on helping you develop an HR strategy aligned with your company’s goals. Every organization is unique, with distinct challenges, opportunities, and people. We consider all aspects of the HR framework in developing a robust HR strategy.`,
        },
        {
          title: "HR Documentation",
          content: `Is your HR documentation up to date? Does it provide all the information needed and cover you from all potential eventualities?

It’s vital that your HR documents, from employment contracts to handbooks, are updated on a regular basis to maintain their legal compliance and prevent you from falling into potentially costly pitfalls.

It is recommended that employers engage HR and legal professionals to create HR documentation, to ensure it is robust and legally compliant. The risks involved if your documentation is poorly written or omits important information are very high.

For example, if contracts of employment are not written correctly and do not contain the necessary information to protect you, then you could face fines of up to £95,000 if a dispute is taken to an employment tribunal.

Also, if companies fail to inform employees about their terms and conditions of employment this could result in a claim of unfair dismissal being made against the company.

AGILE360 PMC can help you stay on top of your documentation and avoid the minefield of hidden HR disasters that outdated or poorly written documents can bring. We will ensure you’re protected.`,
        },
        {
          title: "Employment Tribunal Case Management",
          content: `AGILE360 PMC offers a market-leading employment tribunal service and case management to UK businesses of all sizes. We understand that being taken to an employment tribunal can be a stressful, time-consuming and costly experience, so we provide you with the expert support you need to successfully face the challenges of employment tribunal case management.

Your dedicated HR business consultant will be by your side throughout the entire process, assisting you with everything necessary regardless of complexity to ensure that the legal advice and guidance you receive is aligned with ACAS, best practice, and to the very best standards.

Applying a top-down approach, we will also revisit your HR policies and processes so you can enjoy peace of mind knowing that your HR practices are entirely compliant with UK employment law. This allows us to prevent employment tribunal cases in the future and mitigate employment disputes before they escalate into expensive litigation.`,
        },
        {
          title: "Performance Management",
          content: `Struggling to support your team to meet business objectives?

For those tasked with HR and performance management and delivering key business outcomes, one main challenge is balancing the relationship between employees and the value they deliver. Performance management is a way of engaging employees directly with their own work outcomes, ensuring they understand their contribution to wider business objectives and organisational strategy.

Effective HR performance management relies on both formal and informal processes, is based on regular two-way discussion and open, supportive feedback of progress towards objectives.`,
        },
        {
          title: "Support & Advisory",
          content: `We provide HR support for small and medium enterprises (SMEs) across the UK and can scale our services for businesses of almost any size. We provide a dedicated business partner, offering ongoing expert HR advice and support as well as one-off assistance for any unforeseen challenges.

Human resources needs should always be undertaken by a qualified HR practitioner but are often spread amongst directors and managers. Operating without proper HR support leaves you vulnerable to issues like recruitment difficulties and non-compliance, redundancies and grievances, etc. With our help, you can free up staff to focus on their own workloads and ensure you’re professionally covered.

`,
        },
      ],
    },
    {
      title: "Compliance Audit",
      sub: [
        {
          title: "Sponsor Compliance and Audit",
          content: `Our thorough approach ensures your organization meets all regulatory requirements and operates within the required legal frameworks.

We conduct a holistic review and comprehensive audit of all aspects of your sponsor compliance. Our services cover:

Your general sponsor duties
Migrant tracking and monitoring
Record keeping and reporting duties
Guidance on SMS Management
Compliance with UK legislation including Employment law, Contract Law and wider UK Law`,
        },
        {
          title: "Action Plan and Design Implementation",
          content: `Recognizing that one size does not fit all, we provide personalized support throughout the rollout and implementation of our deliverables, ensuring seamless integration at every stage.

We design bespoke solutions, creating forms and templates specifically tailored to your business and organizational needs including:

• Design and roll out of workers staff files
• Writing and implementation of recruitment policy and procedures both in-country and overseas
• Policy & procedure for an effective Migrant Tracking & Monitoring
• Policy & Procedure for efficient record keeping`,
        },
        {
          title: "Visa Application",
          content: `Whether you're an individual looking to apply for one of the services listed below, or an organisation seeking to assist your employees with their applications, we provide expert, comprehensive support throughout the entire process. Our services include:

• Fee Waiver Application
• Further Leave to Remain (FLR) Application
• Visa Application
Our team of dedicated professionals will guide you every step of the way, ensuring that all documents are meticulously prepared, that you meet all eligibility requirements, and that the necessary procedures are followed. We place great emphasis on compliance to help you avoid delays or complications.

For organisations, we simplify the process to allow you to focus on your core business operations, and for individuals, we ensure that you can concentrate on your personal and professional life while we handle the complexities of your application.

Our goal is to make the entire application experience as smooth and stress-free as possible — whether you’re applying for yourself or assisting your employees.`,
        },
        {
          title: "Governance, Risk and Audit",
          content: `A corporate governance framework sets the foundational rules, guidelines, and control measures that an organization—including its Board of Directors—uses to ensure accountability, fairness, and transparency in its operations, both internally and externally. This framework is essential for maintaining trust, protecting the interests of shareholders, and ensuring that the company operates in a legally compliant and ethical manner.

AGILE360 PMC brings extensive expertise in developing corporate governance frameworks for both government and private sector organizations. We assist companies in establishing robust control mechanisms that ensure smooth operations, protect shareholder interests, and maintain compliance with legal standards and best practices. Our team has successfully created various governance tools, such as Delegation of Authority Matrices, and has supported numerous organizations in forming appropriate governance bodies, including defining the Terms of Reference for Boards and Governance Committees. Our solutions are designed to enhance governance while fostering long-term organizational sustainability.`,
        },
      ],
    },
    {
      title: "HR Documentaion Design",
      desc: `Is your HR documentation up to date? Does it provide all the information needed and cover you from all potential eventualities?

It’s vital that your HR documents, from employment contracts to handbooks, are updated on a regular basis to maintain their legal compliance and prevent you from falling into potentially costly pitfalls.

It is recommended that employers engage HR and legal professionals to create HR documentation, to ensure it is robust and legally compliant. The risks involved if your documentation is poorly written or omits important information are very high.

For example, if contracts of employment are not written correctly and do not contain the necessary information to protect you, then you could face fines of up to £95,000 if a dispute is taken to an employment tribunal.

Also, if companies fail to inform employees about their terms and conditions of employment this could result in a claim of unfair dismissal being made against the company.

AGILE360 PMC can help you stay on top of your documentation and avoid the minefield of hidden HR disasters that outdated or poorly written documents can bring. We will ensure you’re protected.`,
    },
    {
      title: "HR Outsourcing",
      desc: `Managing HR internally can be a huge drain on resources, which is why more and more businesses are choosing to entrust their HR needs to an expert partner. At Agile360 PMC, we provide comprehensive outsourced HR services to save you time and money, always tailored to your precise needs.

Why Use HR Outsourced Services?
To businesses of any size, HR outsourcing can be an advantage. At Agile360 PMC, our experts take on your HR workload, greatly simplifying processes that can otherwise be a drain on time and resources. By partnering with us, you gain access to a wealth of HR expertise and cutting-edge tools designed to optimise workforce management.

We take great pride in integrating seamlessly into your ongoing operations with minimal disruption, quickly delivering maximum benefit to your team. Whatever the nature of your business, our highly skilled outsourced HR team will handle your HR functions so you can focus on what you do best — growing your business.

• Save Valuable Time  
• Lower Your Risk  
• Save Money  

Why Choose Agile360 PMC?

• Expertise  
• Efficiency  
• Compliance  
• Cost-Effective  
• Focus  
• Scalability`,
    },
    {
      title: "Developing HR Strategies",
      desc: `We help you create powerful HR strategies that drive productivity and align with your corporate objectives.

This includes workforce planning, performance management, employee engagement, training and development, and succession planning to build a future-ready organization.`,
    },

    {
      title: "Manpower Planning, Recruitment & Retention",
      desc: `Manpower planning, recruitment and retention are critical business considerations for building a skilled workforce and achieving organizational goals.

How we can help you
We identify your manpower needs by considering your business nature, practices, systems, processes, and industry norms. We provide hands-on support across all stages of recruitment and retention:

• Developing detailed job descriptions.  
• Designing and implementing robust recruitment and selection tools.  
• Managing candidate sourcing, screening, interviewing, hiring, and onboarding.  

For overseas recruitment, we ensure compliance with sponsor compliance requirements and regulations in alignment with Par C1.38. We have worked extensively with clients to design, develop, and implement retention strategies to attract and retain talent.

• Taking a holistic view of the employment relationship.  
• Developing total reward strategies.  
• Enhancing employee value proposition and long-term incentive programs to attract and retain talent.`,
    },
    {
      title: "Organizational Design and Structure",
      desc: `The design and structure of your organization directly impact its performance.

Effective organizational design integrates people, structures, processes, and systems while considering the external environment. Whether you're preparing for growth or undergoing a restructure, it's crucial to maintain a focus on organizational design to ensure efficiency.

We have a proven track record in developing organizational design solutions tailored to our clients' unique operating environments. Our experienced team works across various industries, including government and the private sector.

We begin with a comprehensive analysis of your business to understand its strategic direction, culture, challenges, and processes. From this, we identify areas for improved performance and alignment, and then create detailed workflows, functional descriptors, and job descriptions to clarify accountability and responsibility at every level.`,
    },
    {
      title: "Additional HR Services",
      desc: `We provide a range of additional HR services designed to support and strengthen your organization in all aspects of people management:

• End-to-End Recruitment  
• CV Review for Compliant Recruitment  
• Training & Development  
• TUPE  
• Succession Planning  
• HR Health Check Audit  

Talk to us today to get started.`,
    },
  ];

  return (
    <div className="w-screen overflow-hidden">
      <div className="w-full py-14 px-4 md:px-16">
        <div className="bg-[#fdf1fc] rounded-3xl shadow-2xl py-10 px-6 md:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#af08af] tracking-wide">
              Services
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-gray-700 leading-relaxed font-normal">
              Discover the strategic services we offer to elevate your HR operations,  
              foster growth, and ensure long-term success.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {services.map((item, index) => {
              const isOpen = index === activeIndex;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full px-6 py-4 flex justify-between items-center text-left transition-colors duration-300 ${
                      isOpen ? "bg-gradient-to-r from-[#af08af]/10 to-[#af08af]/5" : "hover:bg-[#af08af]/10"
                    }`}
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#af08af]">
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#af08af]"
                    >
                      <FaChevronDown />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4 text-gray-800 text-xs sm:text-sm md:text-[15px] font-normal leading-[1.7rem]"
                      >
                        {/* Nested Accordions if available */}
                        {item.sub ? (
                          <div className="space-y-3">
                            {item.sub.map((subItem, i) => (
                              <div key={i} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                                <h4 className="text-sm font-semibold text-[#af08af] mb-1">{subItem.title}</h4>
                                <p className="text-xs md:text-sm text-gray-700 whitespace-pre-wrap">
                                  {subItem.content}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{item.desc}</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceC;
