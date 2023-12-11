// @ts-nocheck
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import tw, { css } from 'twin.macro';

import { Layout } from '../components/layout';

export const Carousel = () => {
  const { t } = useTranslation();

  return (
    <Layout page="item">
      <div
        id="container"
        tw="w-full box-border px-2 pt-8 pb-8 flex flex-col justify-start items-center"
      >
        <div tw="mt-2 md:mt-8 text-center font-semibold">
          <h1>{t('title.item')}</h1>

          <ResponsiveCarousel swipeable emulateTouch>
            <div>
              <img src="assets/art_magic_cat.jpg" />
              <p className="legend">magic cat</p>
            </div>
            <div>
              <img src="assets/art_mocha.jpg" />
              <p className="legend">mocha</p>
            </div>
            <div>
              <img src="assets/art_seagull.jpg" />
              <p className="legend">seagull</p>
            </div>
          </ResponsiveCarousel>
        </div>
      </div>
    </Layout>
  );
};
