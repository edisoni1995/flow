$(document).ready(function(){
	
	//create new folder 

	$('.rename-file').click(function(){
		var name = $('.table input:checked').closest('.file').find('.file-name').text();
		$('#file-name').val(name);
		$('#rename-file').modal('show');
	});

	// move a file to a folder
	$('.move-file').click(function(){
		var name = $('.table input:checked').closest('.file').find('.file-name').text();
		
		$('.move-to').text('Move here').removeClass('hidden');
	});

	//copy a file to a folder
	$('.copy-file').click(function(){
		var name = $('.table input:checked').closest('.file').find('.file-name').text();
		
		$('.move-to').text('Copy here').removeClass('hidden');
	});

	//delete a file or a folder
	$('.delete-file').click(function(){
		var name = $('.table input:checked').closest('.file').find('.file-name').text();
		$('#delete-file .modal-body').html("Are you sure you want to delete "+name);
		$('#delete-file').modal('show');

		
	});

	//select all files

	$('#selectAll').click(function(){
		if($(this).prop('checked')== true){
			$('.table tbody input[type="checkbox"').prop('checked', true);
			$('.rename-file').attr("disabled", true);
			$('.copy-link').attr("disabled", true);
		}else{
			$('.table tbody input[type="checkbox"').prop('checked', false);
			$('.rename-file').attr("disabled", false);
			$('.copy-link').attr("disabled", false);

		}
		
	});

	//on checkbox change hide move to and copy to buttons

	
});


function createFolder(el){
	var name = $("#inputFolder").val();
	if(name == ''){
		$('#inputFolder').css("border-color" , "red");
		return;
	}
	var row = '<tr class="folder"><td><fieldset class="form-group"><input type="checkbox" id="checkbox1"><label for="checkbox1"></label></fieldset></td><td></td><td class="folder-name"><i class="fa fa-folder" aria-hidden="true"></i>'+name+'<button type="button" class="btn btn-info move-to hidden">Move here</button></td><td>-</td><td>-</td><td>-</td><td>-</td></tr>';
	$('.table tbody').prepend(row);
	$("#inputFolder").val('');
	$('#create-folder').modal('hide');
}

function renameFile(el){
	var name = $('#file-name').val();
	if(name == ''){
		$('#file-name').css("border-color" , "red");
		return;
	}
	$('.table input:checked').closest('.file').find('.file-name').text(name);
	$("#file-name").val('');
	$('#rename-file').modal('hide');
}

function deleteFile(el){
	$('.table input:checked').closest('.file').remove();
	$('#delete-file').modal('hide');
}

