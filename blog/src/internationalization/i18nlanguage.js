import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'Register': 'Register',
                    'Login': 'Login',
                    'name': 'Name',
                    'surname': 'Surname',
                    'password': 'password',
                    'Password mismatch': 'Password mismatch',
                    'submit': 'submit',
                    'cleaner': 'cleaner',
                    'logout': "Logout",
                    'homepage': "Home Page",
                    'company': "Company Name",
                    'product': "Product",
                    'useFullLink': "useFullLink",
                    'contact': "Contact",
                    'home': "Home",
                    'search': "search",
                    'create': "Create",
                    'isRead':' are you reading ?',
                    'update':"Update",
                    'email':"Email",
                    'email_address':"Your email address",
                    'email_subject':"Email Subject",
                    'email_text':"Email Content",
                    'roles':"Roles",
                    'roles_page':"Role Page",
                    'blog':"Blog",
                    'blog_header':'Blog Header',
                    'blog_content':'Blog Content',
                    'blog_image':'Blog Image',
                }
            },
        tr:
            {
                translations: {
                    'Register': 'Üye Kayıt',
                    'Login': 'Üye Girişi',
                    'name': 'Kullanıcı Adı',
                    'surname': 'Kullanıcı Soyadı',
                    'password': 'Kullanıcı Şifresi',
                    'Password mismatch': 'Aynı Şifreyi tekrar giriniz',
                    'submit': 'Gönder',
                    'cleaner': 'Temizle',
                    'logout': "Çıkış Yap",
                    'homepage': "Anasayfa",
                    'company': "Şirket Adı",
                    'product': "Ürün",
                    'useFullLink': "Yararlı Linkler",
                    'contact': "İletişim",
                    'home': "Anasayfa",
                    'search': "Arama..",
                    'create': "Ekle",
                    'isRead':' Okudun mu ?',
                    'update':"Güncelle",
                    'email':"Email",
                    'email_address':"Email Addresiniz",
                    'email_subject':"Email Konu",
                    'email_text':"Email İçerik",
                    'roles':"Roles",
                    'roles_page':"Role Sayfası",
                    'blog':"Blog",
                    'blog_header':'Blog Başlık',
                    'blog_content':'Blog İçerik',
                    'blog_image':'Blog Resim',
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;