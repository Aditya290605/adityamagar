import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import Contact from "@/components/Contact/Contact";
import Profiles from "@/components/Profiles/Profiles";

const ContactPage = () => {
  return (
    <>
      <Meta
        title="Contact — Aditya Magar"
        description="Get in touch with Aditya Magar — open for collaborations, freelance projects, and full-time opportunities."
      />
      <div className="section-container min-h-screen">
        <PageHeader
          title="Contact"
          subtitle="Have a project in mind, a role to discuss, or just want to say hello? I'd love to hear from you."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />
      </div>

      {/* Reuse existing Contact section component */}
      <Contact />

      {/* Social links */}
      <div className="section-container py-10">
        <h3 className="uppercase tracking-widest text-gray-light-4 text-xs font-mono font-medium mb-6 text-center">
          Connect on social media
        </h3>
        <div className="flex justify-center">
          <Profiles />
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default ContactPage;
