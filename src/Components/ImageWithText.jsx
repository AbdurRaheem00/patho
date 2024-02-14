import React from "react";

const ImageWithText = ({ img }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <img src={img} className="w-full p-[50px] " />
      </div>
      <div className="w-1/2 px-4">
        <p className="text-gray-600 text-wrap text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sequi
          aperiam voluptatem doloribus eos minus consectetur, ea cupiditate
          accusantium quam laudantium, aliquam, officia alias corporis dolore.
          Quibusdam voluptatum voluptatibus nesciunt? Sunt labore molestiae ipsa
          ex illum quibusdam itaque autem excepturi ipsam cumque suscipit
          deleniti fugiat exercitationem praesentium eos ducimus mollitia,
          tempora a voluptatibus vitae beatae, cum, sint magni. Quaerat,
          asperiores! Eum, harum odit obcaecati tempore error voluptate delectus
          saepe minima repellendus dolores sequi aliquam! Placeat saepe,
          consectetur ut sed hic modi, blanditiis commodi nemo eaque nisi
          tempore velit molestiae pariatur. Dolor nostrum numquam sed
          voluptatem, modi ullam.Eum, harum odit obcaecati tempore error
          voluptate delectus saepe minima repellendus dolores sequi aliquam!
          Placeat saepe, consectetur ut sed hic modi, blanditiis commodi nemo
          eaque nisi tempore velit molestiae pariatur. Dolor nostrum numquam sed
          voluptatem, modi ullam.
        </p>
      </div>
    </div>
  );
};

export default ImageWithText;
