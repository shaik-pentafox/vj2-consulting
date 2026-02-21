import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { IconPhone, IconMail, IconMapPin, IconCalendar } from "@tabler/icons-react";
import Logo from "../assets/LogoLight.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 — Logo + Address */}
          <div>
            <img src={Logo} alt="VJ2 Consulting" className="h-10" />

            <div className="mt-5 space-y-3 text-white/80">
              <div className="flex items-start gap-2">
                <IconMapPin size={18} className="mt-1 text-accent" />
                <p>
                  11/A2, Lok Kailash, JSD Road,
                  <br />
                  Mulund, Mumbai - 40008
                </p>
              </div>

              <div className="flex items-center gap-2">
                <IconCalendar size={18} className="text-accent" />
                <p>Mon - Fri : 9 AM - 6 PM</p>
              </div>
            </div>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h4 className="font-semibold text-white">Contact</h4>

            <p className="mt-4 text-white/80">
              Tushar Bhanushali <br />
              Founder & CEO (Mumbai)
            </p>

            <div className="mt-4 space-y-2 text-white/80">
              <div className="flex items-center gap-2">
                <IconPhone size={16} className="text-accent" />
                <span>+91 8588894261</span>
              </div>

              <div className="flex items-center gap-2">
                <IconMail size={16} className="text-accent" />
                <span>tusharkb@vj2consulting.com</span>
              </div>
            </div>
          </div>

          {/* Column 3 — Social */}
          <div>
            <h4 className="font-semibold text-white">Follow us</h4>

            <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com/vj2consulting" target="_blank" className="rounded-full bg-white/10 p-3 transition hover:bg-accent hover:text-primary">
                <IconBrandInstagram size={20} />
              </a>

              <a href="https://www.linkedin.com/company/112021980/admin/page-posts/published" target="_blank" className="rounded-full bg-white/10 p-3 transition hover:bg-accent hover:text-primary">
                <IconBrandLinkedin size={20} />
              </a>

              <a href="https://x.com/VJ2Consulting" target="_blank" className="rounded-full bg-white/10 p-3 transition hover:bg-accent hover:text-primary">
                <IconBrandX size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-white/60 md:flex-row">
          <p>© 2026 VJ2 Consulting. All rights reserved.</p>

          <div className="flex gap-4">
            <a className="hover:text-accent">Privacy Policy</a>
            <a className="hover:text-accent">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
