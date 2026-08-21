import FooterLinkGroup from "./components/FooterLinkGroup";
import {
  footerAboutLinksGroup,
  footerCommunityLinksGroup,
  footerSocialLinksGroup,
} from "./footer.constants";

const Footer = () => {
  return (
    <div className="p-4 sm:px-12 sm:py-10">
      <div className="flex flex-col justify-between gap-10 mb-10 sm:flex-row">
        <div>
          <div className="flex flex-col items-start gap-6">
            <img
              src="/images/Logo.png"
              alt="logo"
              className="w-27 h-auto sm:w-37"
            />
            <div className="text-[14px] sm:text-[16px] text-secondary-400 max-w-70">
              Our vision is to provide convenience and help increase your sales
              business.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-18">
          <FooterLinkGroup title="About" links={footerAboutLinksGroup} />
          <FooterLinkGroup
            title="Community"
            links={footerCommunityLinksGroup}
          />
          <FooterLinkGroup title="Socials" links={footerSocialLinksGroup} />
        </div>
      </div>
      <hr className="text-gray-400" />
      <div className="text-[14px] font-medium flex justify-between pt-4 flex-col-reverse gap-4 sm:pt-8 sm:text-[16px] sm:flex-row">
        <div>&copy; {new Date().getFullYear()} MORENT. All rights reserved</div>
        <div className="flex gap-8 justify-between">
          <div>Privacy & Policy</div>
          <div>Terms & Condition</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
