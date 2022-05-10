import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";

const Modal = React.forwardRef(
  ({ children, open = true, onClose = () => {} }, ref) => {
    const modalRef = useRef(null);

    useEffect(() => {
      if (open) {
        modalRef.current.classList.add(styles.visible);
        document.body.classList.add(styles.noScroll);
      } else {
        modalRef.current.classList.remove(styles.visible);
        document.body.classList.remove(styles.noScroll);
      }
    }, [open]);

    const innerModalRef = useRef(null);
    useEffect(() => {
      const bodyClick = (e) => {
        if (
          (innerModalRef.current && innerModalRef.current.contains(e.target)) ||
          (ref.current && ref.current.contains(e.target))
        )
          return;
        onClose();
      };

      document.body.addEventListener("click", bodyClick);
      return () => {
        document.body.removeEventListener("click", bodyClick);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <div ref={modalRef} className={`${styles.modal__wrap}`}>
        <div ref={innerModalRef} className={styles.modal}>
          {children}
        </div>
      </div>
    );
  }
);

export default Modal;
