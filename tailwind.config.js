/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Ronoto-Slab': ['Roboto Slab', 'serif'],
      },

      fontSize: {
        'hxl': '2.5rem',
      },
      backgroundImage: {
        "testimonial": "url('/homepage_images/testimonial.png')",
        "service_hero": "url('/services_images/person_computer.png')",
        "steps_to_take": "url('/services_images/steps_to_take.png')",
        "contact_us": "url('/bg-contact.png')",
      },

      colors: {
        //Background Colours
        'primary': '#7B55F7',
        'secondary': '#E8E0FF',//footer
        'overlay': '#1F1051',
        'gradient-right':'#805BF8',
        'cyan':'#60ACF8',
        'brand-section': '#F5F8FF',

        //Button Colours
        'btn-primary': '#7659F8',//primary state
        'btn-hover': '#6342F8',//hover state

        //Text Colours
        'heading': '#553CA3',
        'paragraph': '#000000',//Divide by 74% in the code to reduce opacity
        'text-on-white': '#3E20A1',

      }
    },
  },
  plugins: [],
}