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
		$('.cancel').removeClass('hidden');
		$('.move-to').text('Move here').removeClass('hidden');
	});

	//copy a file to a folder
	$('.copy-file').click(function(){
		var name = $('.table input:checked').closest('.file').find('.file-name').text();
		$('.cancel').removeClass('hidden');
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
			$('.table tbody tr.file input[type="checkbox"').prop('checked', true);
			$('.rename-file').attr("disabled", true);
			$('.copy-link').attr("disabled", true);
			$('.move-file').attr("disabled", false);
			$('.copy-file').attr("disabled", false);
			$('.delete-file').attr("disabled", false);
		}else{
			$('.table tbody tr.file input[type="checkbox"').prop('checked', false);
			cancel();


		}
		
	});

	//cancle move to or copy to action
	$('.cancel').click(function(){
		cancel();
	});

	//on checkbox change hide move to and copy to buttons
	$('.table tbody input[type="checkbox"]').change(function(){
		var checked = $('.table tbody input:checkbox:checked');
		if(checked.length==0){
			cancel();
		}else if(checked.length == 1){
			enableActions();
			$('#selectAll').prop('checked',false);
		}else if(checked.length >=2){
			$('.rename-file').attr("disabled", true);
			$('.copy-link').attr("disabled", true);
			$('.copy-link').attr("disabled", true);
		}
	});

	//copy selected file link
	$('.copy-link').click(function() {
		var link = $('.table input:checked').closest('.file').find('.file-name a').attr('href');
		var aux = document.createElement("input");
		aux.setAttribute("value", link);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
	});

	$('.move-to').click(function(){
		var type = $(this).text();
		if(type == 'Copy here'){
			copyFile();
		}else{
			moveFile();
		}
	});
	
});




function createFolder(el){
	var name = $("#inputFolder").val();
	if(name == ''){
		$('#inputFolder').css("border-color" , "red");
		return;
	}
	var row = '<tr class="folder"><td></td><td></td><td class="folder-name"><i class="fa fa-folder" aria-hidden="true"></i>'+name+'<button type="button" class="btn btn-info move-to hidden">Move here</button></td><td>-</td><td>-</td><td>-</td><td>-</td></tr>';
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

function cancel(){
	$('.table tbody tr.file input[type="checkbox"').prop('checked', false);
	$('#selectAll').prop('checked',false);
	$('.copy-link').attr('disabled',true);
	$('.rename-file').attr('disabled',true);
	$('.delete-file').attr('disabled',true);
	$('.copy-file').attr('disabled',true);
	$('.move-file').attr('disabled',true);
	$('.move-to').addClass('hidden');
	$('.cancel').addClass('hidden');
}

function enableActions(){
	$('.copy-link').attr('disabled',false);
	$('.copy-file').attr('disabled',false);
	$('.move-file').attr('disabled',false);
	$('.delete-file').attr('disabled',false);
	$('.rename-file').attr('disabled',false);
}

function copyFile(){
	console.log('kot');
}

function moveFile(){
	$('.table input:checked').closest('.file').remove();
	cancel();
}