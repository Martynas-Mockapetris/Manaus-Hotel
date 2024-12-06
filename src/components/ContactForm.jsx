import Location from '../assets/location.png';
import Bubble from '../assets/Bubble.svg'

const ContactForm = () => {
  return (
    <section class="bg-greenDark text-textWhite">
      <div className="container">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-md relative">
          <div className="bg-greenLight w-10 h-10 shadow-[_0_0_180px_180px_#50c557] opacity-20 rounded-full absolute z-0 top-[240px] right-[-50px]"></div>
          <div className="bg-greenLight w-10 h-10 shadow-[_0_0_180px_180px_#50c557] opacity-20 rounded-full absolute z-0 bottom-[250px] left-[-200px]"></div>
          <img src={Bubble} className="absolute top-[80px] left-[-220px] w-[200px] h-[200px] object-cover object-top rounded-t-full opacity-80 z-10" />
          <h2 class="mb-6 text-4xl tracking-tight font-body text-center relative z-20">Contact Us</h2>
          <div className="m-auto relative top-[-30px] h-2 w-[220px] bg-greenLight shadow-[_0_0_15px_10px_#50c557] opacity-40"></div>
          <div class="relative w-full rounded-md overflow-hidden my-5 mb-10 shadow-lg">
            <img src={Location} alt="Manaus Hotel Location" className="rounded-md" />
          </div>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl font-text tracking-wider">
            We would love to hear from you. Enjoyed your stay, company booking, have some commercial pruposals or need more information about us? Don't hesitate and fill out this form and we will contact you as soon as we can!
          </p>
          <form action="#" class="space-y-8 pt-6 relative z-50">
            <div>
              <label for="email" class="block mb-2 text-sm font-body font-medium text-greenLight">
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-greenLight outline-none focus:border-greenLight block w-full p-2.5 font-text"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-body font-medium text-greenLight">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-greenLight outline-none focus:border-greenLight block w-full p-2.5 font-text"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-body font-medium text-greenLight">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full min-h-20 text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:ring-greenLight outline-none focus:border-greenLight"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button type="submit" class="py-4 px-5 leading-3 font-body bg-greenLight text-greenDark text-sm font-medium text-center rounded-sm bg-primary-700 sm:w-fit ">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
