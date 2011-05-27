(function($) {
    $.fn.svarx.methods.messages = {
        before: function(e) {
            // �� ����� �񣪨� ᯮᮡ�� �����஢��� ��뫪� �� ���譨� svarx-����,
            // �.�. ������ ����� ��뢠���� �� ��᪮�쪨� ࠧ��� �ଠ� ����� ��࠭���
            $(this)
                .closest('.b-svarx')
                .find('.b-svarx__err')
                .addClass('b-svarx__err_visible_no');
        },
        
        after: function(e, result, eType) {
            if (eType == 'submit' && !result) {
                e.preventDefault();
            }
        },
        
        error: function(e, id) {
            $(this)
                .closest('.b-svarx')
                .find('.b-svarx__err_id_' + id)
                .removeClass('b-svarx__err_visible_no');
        }
    };
})(jQuery);
