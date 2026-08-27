export const BRAND = {
  name: "SoftIA",
  slogan: "Digitalizamos tu negocio para que puedas crecer",
  taglines: ["PÁGINAS WEB", "APLICACIONES WEB", "AUTOMATIZACIÓN + IA", "INTEGRACIÓN WHATSAPP"],
  values: ["TECNOLOGÍA", "AUTOMATIZACIÓN", "INNOVACIÓN"],
  whatsapp: "+51919470144",
  whatsappFormatted: "+51 919 470 144",
  whatsappUrl: "https://wa.me/51919470144",
  email: "contacto@softia.tech",
  location: "Lima, Perú / Global",
  year: 2026,
  
  // Official images from the brand
  logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIOZnrWPuFUwnbhCmmdS9Lsg0WIHIwedNk1Relfr8RrbJcIOwBdnnIJmrs6pIH9VWFvQ-lxe6k8EVgxGz0kOqOci9ps4NFQzkOJrEAsYo1mI97MUPZYQPsHtrvFgkEtPeAq41byimONHZKzjUF1RAflWSm-iGUlrf-9yDg5DkWxp_hCY_ZNZmfBaXHET9LWCLdWTYEbJ0Fv_ZyM5djyuenveUPjNnGkud009xXUFN2Jqr8ToGHbkq0JY0n5_RZ0l29sQ",
  footerLogoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLpZ2CWTTKh-ceTVpymPP3qttutxvBnoE4jRiO-d6R-dDmGJO73imKPnWisxB3wylOjEFX9o-YvobaaiQxtN62BFY51JZEAAeLkZFasL1enf8IKHF85GSGwXW9rQGZRogcoXvBz2JNn3FqfjewHrIdDVjF-Obg_1vUldo4UsbMQaRAwlTg76CL9eEqNI7G31fqStEyKI5Om1iyUTJ108y9DqOBPNF6PjQ5yLvq7DzzaViNfyl-lh6BQ7AP7UnD8iF3dQ",
  heroMockupUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFzi-CZFe_y9npmSdX9ZdGNKg2uRkC97AoGgtaMPoIH8FX6-emXe6va_NmZZE7Fn_5ZzdYbRUIv5cGz6cNTO_Co3GM-unNvQrAuJ_yCo7BUlHjOqqDl9LDU98v_6FlrP5W-Gaj5JxUaXvn-kvMVcn1WF0sbierSRBF65bJs0B6agw-TEculXvh7uVphD0m8_p8tEOaUaNa4WPztTwUgAu5MLzoJeoVebb_GOVkcvXjDcvlNjbItiy2",
};

export const getWhatsAppChatUrl = (message: string) => {
  return `https://wa.me/51919470144?text=${encodeURIComponent(message)}`;
};
