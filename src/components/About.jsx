import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Giriş</p>
        <h2 className={styles.sectionHeadText}>Hakkımda.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
Merhaba, ben Kaan Erdem. 1999 doğumlu bir genç olarak, 24 yaşındayım ve kendimden bahsetmek istiyorum. Eğitim hayatıma Ata İlköğretim Okulu'nda başladım ve başarıyla mezun olduktan sonra Doğa Koleji'nde lise eğitimimi tamamladım. Üniversiteye geçiş yaptığımda Bilgisayar Programcılığı alanında Okan Üniversitesi'nde eğitim aldım ve bu alanda 2 yıllık bir diplomanın sahibi oldum. Ancak daha fazlasını elde etme arzusuyla başarılarımı taçlandırmak için Nişantaşı Üniversitesi'nde Bilgisayar Mühendisliği programına yönelerek DGS sınavını başarıyla geçtim ve mezun oldum. Ayrıca, askerlik görevimi bedelli olarak tamamladım. <br /> <br />

Uzun yıllardır bilgisayar mühendisliği alanında çalışmaktan ve teknolojiyle ilgilenmekten büyük keyif alıyorum. Bilgisayar programlama ve yazılım geliştirme konularında bilgi ve deneyim sahibiyim. Bu alandaki yeteneklerimi geliştirmek için sürekli olarak kendimi eğitiyor ve yenilikleri takip ediyorum. <br /><br />

Bunun yanı sıra, kişisel ilgi alanlarıma da zaman ayırıyorum. Müzik tutkumu piyano çalarak ifade ediyorum ve spor yapmaktan da büyük zevk alıyorum. Futbol, basketbol, voleybol ve masa tenisi gibi sporları aktif olarak takip ediyor ve oynuyorum. <br /><br />

Hedeflerimden biri, bilgisayar mühendisliği alanında başarılı bir kariyere sahip olmak ve teknoloji dünyasında etkili projelere imza atmak. Aynı zamanda, bilgi ve deneyimlerimi paylaşarak başkalarının da bu alanda ilerlemelerine yardımcı olmayı istiyorum. <br /><br />
İlgilendiğiniz için teşekkür ederim ve web sitemi ziyaret ettiğiniz için minnettarım.
     </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
