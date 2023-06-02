import { Box, Modal } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
const ModalDescentrar = ({ open, indexContent, handleClose }) => {
  const imagesArrays = [
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837490/dev/A/1_evwpww.png",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837490/dev/A/2_bm4frq.png",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837531/dev/B/3._olores_que_narran._mafe_m8r4eo.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837529/dev/B/2._olores_que_narran._mafe_exmya5.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837529/dev/B/1_zcyb40.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837541/dev/C/1_gtzibj.png",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837540/dev/C/2._gabi._experiencia_plaza_zpzier.png",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837540/dev/C/3._gabi._experiencia_plaza_qmnf0t.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837540/dev/C/4.gabi._experiencia_plaza_ztx0jl.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837708/dev/D/3.olores_que_narran._laura_ovlh3k.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837707/dev/D/2._olores_que_narran._laura_e5cugs.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837707/dev/D/1_chkzjp.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837717/dev/E/2.Nicol%C3%A1s._laboratorio_pnppla.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837718/dev/E/1_zc7gi9.png",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671838764/dev/F/IMG_39071_5x_oaqhsx.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837751/dev/G/1_sjatih.png",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837756/dev/H/2._Cierre_sikuris._Jorge_Torres_dsrngy.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837757/dev/H/1_r5bxly.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837768/dev/I/2._laboratorio_sensible._Miguel_o6emqw.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837766/dev/I/1_aaizxj.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837781/dev/J/1._memoria_dos_voojip.png",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837781/dev/J/2._memoria_3_kzw2qk.png",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837781/dev/J/3._memorias_yscf9z.png",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837800/dev/K/k2_ts0k2u.png",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837800/dev/K/k1_kcaki0.png",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671837800/dev/K/k3_y6103j.png",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839281/dev/L/3._jonathan.cierre_con_sikuris_fjndzf.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839281/dev/L/2._jonathan._cierre_con_sikurisjpeg_wus0rw.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839347/dev/M/1._sarakamila._cena_y_experiencia_plaza_u9s2j1.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839347/dev/M/2._cena_y_experiencia_plaza_n31s4g.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839347/dev/M/3.cierre_y_experiencia_plaza_qa2ejl.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839398/dev/N/1._catalina_daza._cierre_con_sikuris._jpeg_q8dtrg.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839398/dev/N/2._catalina_daza._cierre_con_sikuris_e0sbbz.jpg",
    ],
    [
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839464/dev/Ni/WhatsApp_Image_2022-12-13_at_8.25.37_PM_1_tibttt.jpg",
      "https://res.cloudinary.com/crea-lo/image/upload/v1671839465/dev/Ni/WhatsApp_Image_2022-12-13_at_8.25.37_PM_ytr0yf.jpg",
    ],
  ];
  const audioArray = [
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837490/dev/A/A._final_rnv1ut.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837530/dev/B/B._final_avyagr.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837542/dev/C/C._final_n96p1e.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837708/dev/D/D._final_aewqrw.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837718/dev/E/E._final_eebjo1.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837730/dev/F/F._final_uq25hx.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837746/dev/G/G._final_ysrw6b.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837758/dev/H/H._final_ucwskp.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837767/dev/I/I._final_cguakv.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671837783/dev/J/J._final_rou9dk.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671841498/dev/K/K._final_nhoxfo.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671839282/dev/L/L._final_vbxgne.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671839347/dev/M/M._final_pnoaxh.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671839399/dev/N/N._final_smwv8r.mp3",
    "https://res.cloudinary.com/crea-lo/video/upload/v1671839465/dev/Ni/%C3%91._Final_ccfuyp.mp3",
  ];

  const ItemImg = ({ src }) => {
    return (
      <Paper style={{ display: "flex", justifyContent: "center"}}>
        <img src={src} style={{ width: '100%', maxWidth: '500px', aspectRatio: "4 / 3", objectFit: "cover" }} />
      </Paper>
    );
  };
  const ItemAud = ({ src }) => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <audio
          // controls
          autoPlay
        >
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    );
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "95%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    zIndex: 2002,
  };
  let itemsImg = imagesArrays[indexContent];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ zIndex: 2001 }}
      >
        <Box sx={style}>
          <Carousel>
            {itemsImg.map((item, i) => (
              <ItemImg key={i} src={item} />
            ))}
          </Carousel>
          <ItemAud src={audioArray[indexContent]} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button color="error" onClick={handleClose}>
              X
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDescentrar;
